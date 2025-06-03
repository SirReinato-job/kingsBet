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
