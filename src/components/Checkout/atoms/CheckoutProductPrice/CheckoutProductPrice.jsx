import styles from './ChekoutProductPrice.module.css';

const CheckoutProductPrice = ({currentPrice, previousPrice}) => {
    return (
        <div className={styles.container}>
            <p className={styles.current}>$ {currentPrice}</p>
            {
                previousPrice &&
                <p className={styles.previous}>$ {previousPrice}</p>
            }
        </div>
    );
}

export default CheckoutProductPrice;