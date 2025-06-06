import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className={styles.containerCassino}>

            <div className={`${styles.container} ${styles.flexColumn}`}>
                <img src="img/coroa.png" alt="coroa" />
                <h1>KING'S BET</h1>
                <p>Controle organizacional para apostas</p>
                <Link to="/cassino" className={styles.link}>
                    <button className={styles.button}>Acessar Cassino</button>
                </Link>
            </div>
        </div>
    );
}   