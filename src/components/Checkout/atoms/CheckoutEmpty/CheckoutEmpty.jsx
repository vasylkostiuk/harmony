import styles from './CheckoutEmpty.module.css';
import Link from "next/link";

const CheckoutEmpty = () => {
    return (
        <>
            <h1 className={styles.title}>Checkout</h1>
            <p className={styles.text}>
                You have no items here, please browse a store to add products
            </p>
            <Link href={'/product'} passHref>
                <div className={styles.link__container}>
                    <a href="#" className={styles.link}>Browse a store</a>
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7.24L1 14" stroke="#18181B" strokeWidth="2"/>
                    </svg>
                </div>
            </Link>
        </>
    );
}

export default CheckoutEmpty;