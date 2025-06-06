import styles from "./PainelBet.module.scss";
import { useBet } from "../../context/BetContext";
import ModalGanho from "../ModalGanho";
import { useState } from "react";
import Cards from "../Cards";
import { set } from "react-hook-form";

export default function PainelBet() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Obtém os valores do contexto BetContext
    const {
        saldoInicial,
        saldoAtual,
        setSaldoAtual,
        valorGiro,
        resetarDados,
        registrarGiro,
        historico,
    } = useBet();

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const valorApostadoAoGirar = (historico.length * valorGiro);

    const valorGanho = historico
        .filter((item) => item.tipo === "ganho")
        .reduce((acc, item) => acc + item.valor, 0);

    

    // Função para registrar um giro apenas se tiver um valor
    function registrarSeuGiro() {
        if (saldoAtual >= valorGiro && valorGiro > 0) {
            registrarGiro(saldoAtual);
        } else {
            alert(
                "Saldo insuficiente, por favor, acrescente um valor primeiro."
            );
        }
    }

    // useExtMessage((data) => {
    //     if (saldoAtual >= valorGiro && valorGiro > 0) {
    //         registrarGiro(saldoAtual);
    //     }
    // });


    return (
        <div className={`${styles.container} ${styles.painelBetConteiner} ${styles.flexColumn}`}>
            <h2 className={styles.tituloPainel}>Painel de Controle</h2>
            <div className={styles.painelBet}>
                <Cards>
                    <h3 className={styles.tituloPainelBetItem}>
                        Valor inicial
                    </h3>
                    <span className={styles.valorPainelBetItem}>
                        {"R$ " + saldoInicial.toFixed(2)}
                    </span>
                </Cards>

                <Cards>
                    <h3 className={styles.tituloPainelBetItem}>Lucro Total</h3>
                    <span className={styles.valorPainelBetItem}>
                        {"R$ " + (saldoInicial - valorApostadoAoGirar + valorGanho).toFixed(2)}
                    </span>
                </Cards>

                <Cards>
                    <h3 className={styles.tituloPainelBetItem}>Porcentagem</h3>
                    <span className={styles.valorPainelBetItem}>
                        {(
                            ((saldoAtual - saldoInicial) / saldoInicial) *
                            100
                        ).toFixed(2) + "%"}
                    </span>
                </Cards>
            </div>
            <div className={styles.painelBet}>

                <Cards>
                    <h3 className={styles.tituloPainelBetItem}>Valor Gasto</h3>
                    <span className={styles.valorPainelBetItem}>
                        {"R$ " + valorApostadoAoGirar.toFixed(2)}
                    </span>
                </Cards>


                <Cards>
                    <h3 className={styles.tituloPainelBetItem}>Valor Real Ganho</h3>
                    <span className={styles.valorPainelBetItem}>
                        { "R$ " + (valorGanho-valorApostadoAoGirar).toFixed(2) }
                    </span>
                </Cards>
            </div>

            <div className={styles.painelBtnConteiner}>
                <button
                    id="registrarGiro"
                    onClick={() => registrarSeuGiro()}
                    className={styles.btnApostar}
                >
                    Apostar
                </button>

                <button
                    onClick={() => resetarDados()}
                    className={styles.btnReiniciar}
                >
                    Reiniciar
                </button>

                <button onClick={openModal} className={styles.btnGanho}>
                    Green
                </button>
            </div>
            <ModalGanho isOpen={modalIsOpen} onClose={closeModal} />
        </div>
    );
}
