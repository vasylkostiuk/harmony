import styles from './Summary.module.css';
import {useReactiveVar} from "@apollo/client";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import React, {useState} from 'react';
import {reduceTotalAmount} from "../../../../services/changeCheckoutObj";
import BottomWidget from "../../../global/LoadCircle/layouts/BottomWidget/BottomWidget";
import Link from "next/link";
import {init, send} from "@emailjs/browser";
import {createProductMail} from "../../../../services/createProductMail";
import {contactInfo, isInputsFullFilled} from "../../../../apolloClient/reactiveVariables/contactInfo";
import {isContactFullFilled} from "../../../../services/contactValidation";
import SuccessPopup from "../../../global/SuccessPopup/SuccessPopup";
import ErrorBanner from "../../../global/ErrorBanner/ErrorBanner";

const Summary = ({isFinal = false}) => {
    const checkout = useReactiveVar(checkoutProducts);
    const contacts = useReactiveVar(contactInfo);
    const [showPopup, setShowPopup] = useState(false);
    const [showError, setShowError] = useState(false);

    init(process.env.NEXT_PUBLIC_EMAIL_API_KEY);
    const serviceID = process.env.NEXT_PUBLIC_EMAIL_PRODUCT_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAIL_PRODUCT_TEMPLATE_ID;


    const sendData = {
        products: createProductMail(checkout, contacts)
    }

    const sendEmail = () => {
        if (isContactFullFilled(contacts)) {
            isInputsFullFilled(false);
            send(serviceID, templateID, sendData)
                .then(() => {
                    setShowPopup(true)
                })
                .catch(() => {
                    setShowError(!showError);
                });
        } else {
            isInputsFullFilled(true);
        }
    }

    const btnState = (isFinal) => {
        if (isFinal) {
            return (
                <button className={styles.cta__button} onClick={() => sendEmail()}>
                    <p className={styles.cta__button_text}>Buy products</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1L5.5 5.16L1.5 9.66667" stroke="white" strokeWidth="1.5"/>
                    </svg>
                </button>
            )
        }

        return (
            <Link href={`/checkout/contact`} passHref>
                <button className={styles.cta__button}>
                    <p className={styles.cta__button_text}>Buy products</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1L5.5 5.16L1.5 9.66667" stroke="white" strokeWidth="1.5"/>
                    </svg>
                </button>
            </Link>
        )
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Payment summary
            </h3>
            <div className={styles.grid__container_container}>
                {
                    checkout && checkout?.length
                    ?
                    checkout.map(item => {
                        return (
                            <React.Fragment key={item?.product?.uniqueId}>
                                <p className={`${styles.grid__product_text} ${styles.black}`}>
                                    {item?.product?.info?.title}
                                </p>
                                <div className={styles.grid__product_container}>
                                    <p className={`${styles.grid__product_text} ${styles.grey}`}>
                                        x{item?.quantity}
                                    </p>
                                    <p className={`${styles.grid__product_text} ${styles.black}`}>
                                        $ {(item?.price + item?.internalColorPrice + item?.calculatePrice) * item?.quantity}
                                    </p>
                                </div>
                            </React.Fragment>
                        )
                    })
                    :
                    <></>
                }
            </div>
            <div className={styles.amount__container}>
                <p className={styles.amount__title}>Total amount</p>
                <p className={styles.amount__summary}>$ {reduceTotalAmount(checkout)}</p>
            </div>
            {btnState(isFinal)}
            <div className={styles.cta__financing}>
                <img src={checkout[0]?.creditInfo?.icon?.url} alt="Harmony Domes" className={styles.cta__financing_icon}/>
                <a href={checkout[0]?.creditInfo?.lInk} className={styles.cta__financing_link}>{checkout[0]?.creditInfo?.text} <span className={styles.cta__financing_underlined}>{checkout[0]?.creditInfo?.linkText}</span></a>
            </div>
            <div className={styles.widget}>
                <BottomWidget>
                    {btnState(isFinal)}
                    <div className={styles.cta__financing}>
                        <img src={checkout[0]?.creditInfo?.icon?.url} alt="Harmony Domes" className={`${styles.cta__financing_icon} ${styles.desktop}`}/>
                        <a href={checkout[0]?.creditInfo?.lInk} className={styles.cta__financing_link}>{checkout[0]?.creditInfo?.text} <span className={styles.cta__financing_underlined}>{checkout[0]?.creditInfo?.linkText}</span></a>
                    </div>
                </BottomWidget>
            </div>
            {
                showPopup
                    ?
                    <SuccessPopup/>
                    :
                    <></>
            }
            <ErrorBanner isDisplayed={showError}/>
        </div>
    );
}

export default Summary;