import styles from './Header.module.scss';

export default function Header(params) {
    return(
        <header className={styles.conteinerHeader}>
            <h1 className={styles.tituloHeader}>Controle suas Apostas</h1>
            <p className={styles.paragrafoHeader}>Um site para manter um controle mais preciso das suas apostas</p>
        </header>
    )
}