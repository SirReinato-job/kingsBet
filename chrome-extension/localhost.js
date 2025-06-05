// // localhost.js

// // Registra o listener imediatamente
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'CANAL_BET_FORWARD') {
//     console.log('Mensagem recebida no localhost:', message);
    
//     // Envia para a página React
//     window.postMessage({
//       type: 'FROM_EXTENSION',
//       payload: message.data
//     }, '*');
    
//     sendResponse({status: 'success'});
//   }
//   return true; // Indica que sendResponse será chamado assincronamente
// });

// // Informa ao background que está pronto
// chrome.runtime.sendMessage({type: 'CONTENT_SCRIPT_READY'});