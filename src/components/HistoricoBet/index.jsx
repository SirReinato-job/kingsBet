import { useBet } from '../../context/BetContext';
import styles from './HistoricoBet.module.scss';

export default function HistoricoBet() {
    const { historico } = useBet();
    console.log('historico', historico);

    return (
        <div className={styles.historicoConteiner}>
            <h2 className={styles.historicoTitulo}>Histórico</h2>
            <table className={styles.tabelaConteiner}>
                <thead className={styles.tabelaHeader}>
                    <tr className={styles.tabelaHeaderRow}>
                        <th className={styles.th}>Data</th>
                        <th className={styles.th}>Tipo</th>
                        <th className={styles.th}>Valor Ganho</th>
                    </tr>
                </thead>
                <tbody className={styles.tabelaBody}>
                    {historico.map(item => {
                        return (
                            <tr key={item.id} className={styles.tabelaBodyRow}>
                                <td className={styles.td}>{item.data}</td>
                                <td className={styles.td}>{item.tipo}</td>
                                <td className={styles.td}>{`R$ ${item.valor.toFixed(2)}`}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}