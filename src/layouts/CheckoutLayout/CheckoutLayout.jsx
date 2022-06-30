import styles from './CheckoutLayout.module.css';

const CheckoutLayout = ({children}) => {
    return (
        <div className={styles.container}>
            {children[0]}
            {children[1]}
        </div>
    );
}

export default CheckoutLayout;