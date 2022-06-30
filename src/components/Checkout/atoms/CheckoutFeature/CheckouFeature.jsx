import styles from '../CheckoutColor/CheckoutColor.module.css';
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {deleteObjFeature} from "../../../../services/changeCheckoutObj";

const CheckoutFeature = ({text, isEditable, productId, featureId}) => {
    return (
        <div className={styles.container}>
            <svg style={{marginRight: '8px'}} width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="4" fill="black"/>
            </svg>
            <p className={styles.text}>{text}</p>
            {
                isEditable &&
                <svg className={styles.icon}
                     width="11"
                     height="11"
                     viewBox="0 0 11 11"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     onClick={() => checkoutProducts([...deleteObjFeature(checkoutProducts(), productId, featureId)])}
                >
                    <path d="M1 9.48438L9.48528 0.999094" stroke="#18181B" strokeWidth="1.5"/>
                    <path d="M9.48438 9.48438L0.999094 0.999094" stroke="#18181B" strokeWidth="1.5"/>
                </svg>
            }

        </div>
    );
}

export default CheckoutFeature;