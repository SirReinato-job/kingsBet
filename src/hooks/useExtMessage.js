// useExtMessage.js
import { useEffect } from "react";

export default function useExtMessage(handler) {
  useEffect(() => {
    // Listener para mensagens da extensão via window.postMessage
    const extensionListener = (event) => {
      if (event.data.type === 'FROM_EXTENSION' && event.data.payload.acao === 'registrarGiro') {
        console.log("Mensagem da extensão recebida:", event.data.payload);
        handler(event.data.payload);
      }
    };

    // Listener para mensagens diretas do chrome.runtime (se necessário)
    const chromeListener = (message, sender, sendResponse) => {
      if (message.type === 'CANAL_BET_FORWARD') {
        console.log("Mensagem direta recebida:", message.data);
        handler(message.data);
        sendResponse({status: 'processed'});
      }
      return true;
    };

    window.addEventListener('message', extensionListener);
    
    if (window.chrome?.runtime) {
      chrome.runtime.onMessage.addListener(chromeListener);
    }

    return () => {
      window.removeEventListener('message', extensionListener);
      if (window.chrome?.runtime) {
        chrome.runtime.onMessage.removeListener(chromeListener);
      }
    };
  }, [handler]);
}