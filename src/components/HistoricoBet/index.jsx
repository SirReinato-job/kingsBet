import styles from './HistoricoBet.module.scss';

export default function HistoricoBet() {
    return (
        <div className={styles.historicoConteiner}>
            <h2 className={styles.historicoTitulo}>Histórico</h2>
            <table className={styles.tabelaConteiner }>
                <thead className={styles.tabelaHeader}>
                    <tr className={styles.tabelaHeaderRow}>
                        <th className={styles.th}>Data</th>
                        <th className={styles.th}>Valor Geral</th>
                        <th className={styles.th}>Valor da Aposta</th>
                        <th className={styles.th}>Valor Final</th>
                    </tr>
                </thead>
                <tbody className={styles.tabelaBody}>
                    <tr className={styles.tabelaBodyRow}>
                        <td className={styles.td}>01/06/2025</td>
                        <td className={styles.td}>R$ 100,00</td>
                        <td className={styles.td}>R$ 10,00</td>
                        <td className={styles.td}>R$ 90,00</td>
                    </tr>
                     <tr className={styles.tabelaBodyRow}>
                        <td className={styles.td}>01/06/2025</td>
                        <td className={styles.td}>R$ 100,00</td>
                        <td className={styles.td}>R$ 10,00</td>
                        <td className={styles.td}>R$ 90,00</td>
                    </tr>
                     <tr className={styles.tabelaBodyRow}>
                        <td className={styles.td}>01/06/2025</td>
                        <td className={styles.td}>R$ 100,00</td>
                        <td className={styles.td}>R$ 10,00</td>
                        <td className={styles.td}>R$ 90,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}