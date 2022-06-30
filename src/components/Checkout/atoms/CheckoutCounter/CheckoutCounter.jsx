import styles from './CheckoutCounter.module.css';
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {changeProductQuantity} from "../../../../services/changeCheckoutObj";

const CheckoutCounter = ({quantity, productId}) => {
    return (
        <div className={styles.container}>
            <div
                onClick={() => {
                    if (quantity > 1) {
                        return checkoutProducts([...changeProductQuantity(checkoutProducts(), productId, false)])
                    }
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"

                     style={{cursor: 'pointer'}}
                >
                    <path d="M6.75 12H17.25" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0 0V-1H-1V0H0ZM24 0H25V-1H24V0ZM24 24V25H25V24H24ZM0 24H-1V25H0V24ZM0 1H24V-1H0V1ZM23 0V24H25V0H23ZM24 23H0V25H24V23ZM1 24V0H-1V24H1Z" fill="#E4E4E7"/>
                </svg>
            </div>
            <p className={styles.counter}>{quantity}</p>
            <div
                onClick={() => {
                    return checkoutProducts([...changeProductQuantity(checkoutProducts(), productId, true)])
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"

                     style={{cursor: 'pointer'}}
                >
                    <path d="M12 6.75V17.25" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 12H17.25" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0 0V-1H-1V0H0ZM24 0H25V-1H24V0ZM24 24V25H25V24H24ZM0 24H-1V25H0V24ZM0 1H24V-1H0V1ZM23 0V24H25V0H23ZM24 23H0V25H24V23ZM1 24V0H-1V24H1Z" fill="#E4E4E7"/>
                </svg>
            </div>
        </div>
    );
}

export default CheckoutCounter;