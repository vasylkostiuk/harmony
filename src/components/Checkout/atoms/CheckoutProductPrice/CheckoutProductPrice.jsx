import styles from './ChekoutProductPrice.module.css';

const CheckoutProductPrice = ({currentPrice, previousPrice, isHeaderVersion = false}) => {
    return (
        <div className={`${styles.container} ${isHeaderVersion ? styles.header : ''}`}>
            <p className={`${styles.current} ${isHeaderVersion ? styles.header : ''}`}>$ {currentPrice}</p>
            {
                previousPrice &&
                <p className={`${styles.previous} ${isHeaderVersion ? styles.header : ''}`}>$ {previousPrice}</p>
            }
        </div>
    );
}

export default CheckoutProductPrice;