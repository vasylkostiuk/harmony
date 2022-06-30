import {useQuery} from "@apollo/client";
import {GET_PRODUCT} from "../../../../apolloClient/queries";
import styles from "../CheckoutColor/CheckoutColor.module.css";
import {configureColor} from "../../../../services/configureColor";
import {useEffect, useState} from "react";
import DropdownInternal from "../../molecules/DropdownInternal/DropdownInternal";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {deleteInternalColorPrice} from "../../../../services/changeCheckoutObj";

const CheckoutInternalColor = ({color, text, productId, isEditable, isDisplayed, uniqueId}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (!isDisplayed) {
            checkoutProducts([...deleteInternalColorPrice(checkoutProducts(), uniqueId)])
        }
    }, [isDisplayed]);


    const {data} = useQuery(GET_PRODUCT, {
        variables: {
            id: productId
        }
    });

    const {internalColor} = data?.product;

    return (
        <>
            {
                isDisplayed
                ?
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
                            <DropdownInternal colors={internalColor} currentColor={color} productId={uniqueId}/>
                        }
                    </div>
                :
                <></>
            }
        </>

    );
}

export default CheckoutInternalColor;