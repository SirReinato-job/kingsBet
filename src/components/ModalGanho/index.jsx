import Modal from 'react-modal';
import styles from './ModalGanho.module.scss';
import { useForm } from "react-hook-form";
import { useBet } from '../../context/BetContext';

export default function ModalGanho({ isOpen, onClose }) {
    const { register, handleSubmit, reset } = useForm();
    const { registrarGanho } = useBet();

    const onSubmit = data => {
        registrarGanho(Number(data.valorGanho));
        reset(); 
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={styles.modalConteiner}
            contentLabel="Example Modal"
        >
            <h2 className={styles.tituloModal}>Booaaa, deu green</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formGanhoConteiner}>
                <label className={styles.labelGanho}>Ganhoou covarde</label>
                <input className={styles.inputGanho}
                    placeholder="Insira o valor do seu ganho"
                    type="number"
                    step="0.01"
                    min="0"
                    max="1000000"
                    {...register("valorGanho", { required: true })} />
                <input className={styles.btnPrimary} type="submit" />

            </form>
            <button className={styles.btnCloseModal} onClick={onClose}>close</button>
        </Modal>
    );
}

