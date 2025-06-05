// background.js

// Adicione um mapa para controlar as tentativas de envio
const tabRetries = new Map();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'CANAL_BET_MESSAGE') {
    console.log('Mensagem recebida no background:', message);

    chrome.tabs.query({ url: "http://localhost:5173/*" }, (tabs) => {
      if (!tabs || tabs.length === 0) {
        console.warn('Nenhuma aba do localhost encontrada');
        return;
      }

      tabs.forEach((tab) => {
        // Verifica se o tab está completamente carregado
        if (tab.status !== 'complete') {
          console.warn(`Aba ${tab.id} não está pronta, status: ${tab.status}`);
          return;
        }

        // Limpa tentativas anteriores para esta aba
        if (tabRetries.has(tab.id)) {
          clearTimeout(tabRetries.get(tab.id));
          tabRetries.delete(tab.id);
        }

        const sendMessageWithRetry = (retryCount = 0) => {
          chrome.tabs.sendMessage(tab.id, {
            type: 'CANAL_BET_FORWARD',
            data: message.data
          })
          .then(() => {
            console.log(`Mensagem enviada com sucesso para aba ${tab.id}`);
          })
          .catch((error) => {
            console.warn(`Erro ao enviar para aba ${tab.id}:`, error);
            
            if (retryCount < 3) {
              const delay = Math.pow(2, retryCount) * 1000; // Backoff exponencial
              console.log(`Tentando novamente em ${delay}ms...`);
              
              const retryId = setTimeout(() => {
                sendMessageWithRetry(retryCount + 1);
              }, delay);
              
              tabRetries.set(tab.id, retryId);
            }
          });
        };

        sendMessageWithRetry();
      });
    });
  }
  return true; // Mantém a conexão aberta para sendResponse assíncrono
});