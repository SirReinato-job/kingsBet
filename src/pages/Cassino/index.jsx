import styles from './Cassino.module.scss';
import Header from '../../components/Header';
import ControleValores from '../../components/ControleValores';
import PainelBet from '../../components/PainelBet';
import HistoricoBet from '../../components/HistoricoBet';
export default function Cassinos() {
    return (
        <div className={`${styles.container} ${styles.flexColumn}`}>
            <Header />
            <ControleValores />
            <PainelBet />
            <HistoricoBet />
        </div>
    );
}