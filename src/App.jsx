import './styles/global.scss'
import './App.scss'
import Header from './components/Header'
import ControleValores from './components/ControleValores'
import PainelBet from './components/PainelBet'
import HistoricoBet from './components/HistoricoBet'

function App() {

  return (
    <div className="conteiner">
      <Header />
      <ControleValores/>
      <PainelBet/>
      <HistoricoBet/>
    </div>
  )
}

export default App
