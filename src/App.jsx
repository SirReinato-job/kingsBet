import './styles/global.scss'
import './App.scss'
import Header from './components/Header'
import ControleValores from './components/ControleValores'
import PainelBet from './components/PainelBet'

function App() {

  return (
    <div className="conteiner">
      <Header />
      <ControleValores/>
      <PainelBet/>
    </div>
  )
}

export default App
