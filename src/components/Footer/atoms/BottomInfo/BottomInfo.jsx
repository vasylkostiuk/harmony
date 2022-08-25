import styles from './BottomInfo.module.css';

const BottomInfo = () => {
    return (
        <div className={styles.container__color}>
            <div className="container">
                <div className={styles.container}>
                    <p className={styles.text}>© {new Date().getFullYear()} by Harmony Domes</p>
                    <div className={styles.line}></div>
                    <a href={'#'} className={styles.text}>Policy and Privacy</a>
                </div>
            </div>
        </div>
    );
}

export default BottomInfo;