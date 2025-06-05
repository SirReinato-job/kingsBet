import { useForm } from "react-hook-form";
import styles from "./ControleValores.module.scss";
import { useBet } from "../../context/BetContext";
import Cards from "../Cards";
export default function ControleValores() {
    const { setSaldoInicial, setSaldoAtual, setValorGiro } = useBet();

    const { register, handleSubmit, reset } = useForm();
    // Atualiza o estado do BetContext com os valores do formulário
    const onSubmit = data => {
        setSaldoInicial(Number(data.capitalInicial)) || setSaldoAtual(Number(data.capitalInicial)) || setValorGiro(Number(data.valorGiro));
        reset();
    };

    return (
        <>

            <form className={`${styles.container} ${styles.formConteiner} ${styles.flexSpaceBetween} `} onSubmit={handleSubmit(onSubmit)}>
                {/* capital inicial */}
                <Cards>

                    <label className={styles.labelControle}>Capital inicial</label>
                    <input className={styles.inputControle}
                        placeholder="Insira o valor do capital inicial"
                        type="number"
                        step="0.01"
                        min="0"
                        max="1000000"
                        {...register("capitalInicial", { required: true })} />
                </Cards>
                {/* Valor do giro */}
                <Cards>
                    <label className={styles.labelControle}>Valor do giro</label>
                    <select className={styles.inputControle}  {...register("valorGiro", { required: true })}>
                        <option value=""></option>
                        <option value="0.10">R$ 0,10</option>
                        <option value="0.20">R$ 0,20</option>
                        <option value="0.50">R$ 0,50</option>
                    </select>
                </Cards>

            </form>
            <input className={styles.btnPrimary} type="submit" />
        </>
    )
}