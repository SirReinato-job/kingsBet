import styles from './PainelBet.module.scss';
import { useBet } from '../../context/BetContext';
import ModalGanho from '../ModalGanho';
import { useState } from 'react';


export default function PainelBet() {
    const [modalIsOpen, setModalIsOpen] = useState(false);


    // Obtém os valores do contexto BetContext
    const { saldoInicial, saldoAtual, setSaldoAtual, valorGiro } = useBet();

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }


    return (
        <div className={styles.painelBetConteiner}>
            <h2 className={styles.tituloPainel}>Painel de Controle</h2>
            <div className={styles.painelBet}>

                <div className={styles.painelBetItem}>
                    <h3 className={styles.tituloPainelBetItem}>Valor inicial</h3>
                    <span className={styles.valorPainelBetItem}>
                        {'R$ ' + saldoInicial.toFixed(2)}
                    </span>
                </div>
                <div className={styles.painelBetItem}>
                    <h3 className={styles.tituloPainelBetItem}>Lucro Total</h3>
                    <span className={styles.valorPainelBetItem}>
                        {'R$ ' + (saldoAtual).toFixed(2)}
                    </span>

                </div>
            </div>


            <div className={styles.painelBtnConteiner}>
                <button onClick={() => setSaldoAtual(saldoAtual - valorGiro)} className={styles.btnApostar}>Apostar</button>
                <button onClick={() => setSaldoAtual(saldoInicial)} className={styles.btnReiniciar}>Reiniciar</button>

                <button onClick={openModal} className={styles.btnGanho}>Green</button>
            </div>
            <ModalGanho isOpen={modalIsOpen} onClose={closeModal} />

        </div>
    );
}