// // content.js
// function checkExtensionAvailable() {
//   return new Promise((resolve) => {
//     if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
//       resolve(true);
//     } else {
//       resolve(false);
//     }
//   });
// }

// async function sendCpsCheckMessage() {
//   const isAvailable = await checkExtensionAvailable();
//   if (!isAvailable) {
//     console.log('Extensão não disponível no momento');
//     return;
//   }

//   try {
//     await chrome.runtime.sendMessage({
//       type: 'CANAL_BET_MESSAGE',
//       data: {
//         acao: 'registrarGiro',
//         origem: 'cps-check'
//       }
//     });
//     console.log('Mensagem enviada com sucesso');
//   } catch (error) {
//     console.log('Erro ao enviar mensagem:', error);
//   }
// }

// // Inicia o processo
// async function init() {
//   let attempts = 0;
//   const maxAttempts = 10;
  
//   while (attempts < maxAttempts) {
//     attempts++;
//     await sendCpsCheckMessage();
//     await new Promise(resolve => setTimeout(resolve, 5000));
//   }
// }

// // Dá tempo para a página carregar
// setTimeout(init, 2000);