import styles from './BackButton.module.css';
import Link from "next/link";

const BackButton = () => {
    return (
        <Link href="/checkout/checkdetails" passHref>
            <div className={styles.container}>
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L2 7.24L8 14" stroke="#A1A1AA" strokeWidth="2"/>
                </svg>
                <p className={styles.text}>Back to the order</p>
            </div>
        </Link>
    );
}

export default BackButton;