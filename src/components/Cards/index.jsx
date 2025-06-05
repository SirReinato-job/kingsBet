import style from './Cards.module.scss';

export default function Cards({ children }) {
    return (
        <div className={style.containerCards}>
        {children}
        </div>
    );
}