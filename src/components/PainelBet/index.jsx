import styles from './PainelBet.module.scss';
export default function PainelBet() {
    return (
        <div className={styles.painelBetConteiner}>
            <h2 className={styles.tituloPainel}>Painel de Controle</h2>
            <div className={styles.painelBet}>
                <div className={styles.painelBetItem}>
                    <h3 className={styles.tituloPainelBetItem}>Valor inicial</h3>
                    <span className={styles.valorPainelBetItem}>
                        R$ 30,00
                    </span>
                </div>
                <div className={styles.painelBetItem}>
                    <h3 className={styles.tituloPainelBetItem}>Lucro Total</h3>
                    <span className={styles.valorPainelBetItem}>
                        {'R$ 30,00 ' + '/ 20%'}
                    </span>
                    
                </div>
            </div>
        </div>
    );
}