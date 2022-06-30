import styles from './CheckoutColor.module.css';
import {configureColor} from "../../../../services/configureColor";
import {useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_PRODUCT} from "../../../../apolloClient/queries";
import DropdownColor from "../../molecules/DropdownColor/DropdownColor";

const CheckoutColor = ({color, text, isEditable, productId, initialPrice, uniqueId}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const {data} = useQuery(GET_PRODUCT, {
        variables: {
            id: productId
        }
    });

    const {colors} = data?.product;

    return (
        <div className={styles.container} onClick={() => setShowDropdown(!showDropdown)}>
            <div className={styles.color} style={configureColor(color)}></div>
            <p className={styles.text}>{text}</p>
            {
                isEditable &&
                <svg className={styles.icon} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.664062 1.33203L4.82406 5.33203L9.33073 1.33203" stroke="black" strokeWidth="1.5"/>
                </svg>
            }
            {
                isEditable && showDropdown &&
                <DropdownColor colors={colors} currentColor={color} productId={uniqueId} initialPrice={initialPrice}/>
            }
        </div>
    );
}

export default CheckoutColor;