import styles from './CheckoutTitle.module.css';

const CheckoutTitle = ({title}) => {
    return (
        <h3 className={styles.title}>{title}</h3>
    );
}

export default CheckoutTitle;