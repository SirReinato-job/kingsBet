import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BetProvider } from './context/BetContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BetProvider>
      <App />
    </BetProvider>
  </StrictMode>,
)

// Adiciona o script de inicialização para comunicação com a extensão
if (window.chrome && chrome.runtime && chrome.runtime.sendMessage) {
  // Informa que a página está pronta para receber mensagens
  const sendReadyMessage = () => {
    chrome.runtime.sendMessage({type: 'PAGE_READY'})
      .then(() => console.log('Extensão notificada que a página está pronta'))
      .catch(error => console.warn('Erro ao notificar extensão:', error))
  }
  
  // Espera um breve momento para garantir tudo está carregado
  setTimeout(sendReadyMessage, 500)
  
  // Também envia quando a página termina de carregar completamente
  window.addEventListener('load', sendReadyMessage)
}