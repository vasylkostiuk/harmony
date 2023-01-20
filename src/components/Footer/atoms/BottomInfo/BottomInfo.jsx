import styles from './BottomInfo.module.css';
import Link from "next/link";

const BottomInfo = () => {
    return (
        <div className={styles.container__color}>
            <div className="container">
                <div className={styles.container}>
                    <p className={styles.text}>© {new Date().getFullYear()} by Harmony Domes</p>
                    <div className={styles.line}></div>
                    <Link href={'/articles/clck2z78jjqfw0ajx1hft4zg0'} passhref>
                        <p className={styles.text}>
                            Policy and Privacy
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BottomInfo;