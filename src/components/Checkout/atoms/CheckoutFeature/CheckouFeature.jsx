import styles from '../CheckoutColor/CheckoutColor.module.css';

const CheckoutFeature = ({text}) => {
    return (
        <div className={styles.container}>
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="4" fill="black"/>
            </svg>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default CheckoutFeature;