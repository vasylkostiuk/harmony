import styles from './Sticky.module.css';

const Sticky = ({children}) => {
    return (
        <div className={styles.layout}>
            <div className={styles.static}>{children[0]}</div>
            <div className={styles.sticky}>{children[1]}</div>
        </div>
    );
}

export default Sticky;