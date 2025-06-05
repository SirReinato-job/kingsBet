import styles from './Header.module.scss';

export default function Header() {
    return(
        <header className={`${styles.container} ${styles.flexColumn}`}>
            <h1 className={styles.tituloHeader}>Controle suas Apostas</h1>
            <p className={styles.paragrafoHeader}>Um site para manter um controle mais preciso das suas apostas</p>
        </header>
    )
}