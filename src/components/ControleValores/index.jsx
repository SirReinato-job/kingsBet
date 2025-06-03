import { useForm } from "react-hook-form";
import styles from "./ControleValores.module.scss";

export default function ControleValores() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => alert(data.capitalInicial + ' ' + data.valorGiro);
    return (
        <form className={styles.formConteiner} onSubmit={handleSubmit(onSubmit)}>
            {/* capital inicial */}
            <div className={styles.controleConteiner}>
                <label className={styles.labelControle}>Capital inicial</label>
                <input className={styles.inputControle}
                    placeholder="Insira o valor do capital inicial"
                    type="number"
                    step="0.01"
                    min="0"
                    max="1000000"
                    {...register("capitalInicial", { required: true })} />
            </div>
            {/* Valor do giro */}
            <div className={styles.controleConteiner}>
                <label className={styles.labelControle}>Valor do giro</label>
                <select className={styles.inputControle}  {...register("valorGiro", { required: true })}>
                    <option value=""></option>
                    <option value="0.10">R$ 0,10</option>
                    <option value="0.20">R$ 0,20</option>
                    <option value="0.50">R$ 0,50</option>
                </select>
            </div>

            <input className={styles.btnPrimary} type="submit" />
        </form>
    )
}