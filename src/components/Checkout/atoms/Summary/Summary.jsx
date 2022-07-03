import styles from './Summary.module.css';
import {useReactiveVar} from "@apollo/client";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import React from 'react';
import {reduceTotalAmount} from "../../../../services/changeCheckoutObj";
import BottomWidget from "../../../../layouts/BottomWidget/BottomWidget";
import Link from "next/link";

const Summary = ({isFinal = false}) => {
    const checkout = useReactiveVar(checkoutProducts);

    const btnState = (isFinal) => {
        if (isFinal) {
            return (
                <button className={styles.cta__button}>
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
                            <React.Fragment key={item.id}>
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.055 3.7334H1.53805C0.983984 3.7334 0.533203 4.18418 0.533203 4.73824V11.5179C0.533203 12.0719 0.983984 12.5227 1.53805 12.5227H14.055C14.6091 12.5227 15.0598 12.0719 15.0598 11.5179V4.73824C15.0598 4.18418 14.6091 3.7334 14.055 3.7334ZM14.4348 11.5179C14.4348 11.7273 14.2644 11.8977 14.055 11.8977H1.53805C1.32861 11.8977 1.1582 11.7273 1.1582 11.5179V4.73824C1.1582 4.5288 1.32861 4.3584 1.53805 4.3584H14.055C14.2644 4.3584 14.4348 4.5288 14.4348 4.73824V11.5179Z" fill="#71717A"/>
                    <path d="M13.2358 6.37892C12.8079 6.37892 12.4598 6.03417 12.4598 5.61036C12.4598 5.59548 12.4603 5.5808 12.4611 5.56614C12.4658 5.48039 12.4351 5.39645 12.3761 5.33408C12.317 5.27167 12.2349 5.23633 12.149 5.23633H3.44609C3.36012 5.23633 3.27797 5.27173 3.21891 5.33423C3.15987 5.39673 3.12919 5.48077 3.13409 5.56661C3.13491 5.58111 3.13534 5.5957 3.13534 5.61036C3.13534 6.03417 2.78722 6.37892 2.35937 6.37892C2.18681 6.37892 2.04688 6.51886 2.04688 6.69142V9.62742C2.04688 9.79998 2.18681 9.93992 2.35937 9.93992C2.78722 9.93992 3.13534 10.2847 3.13534 10.7085C3.13534 10.881 3.27528 11.021 3.44784 11.021H12.1473C12.3199 11.021 12.4598 10.881 12.4598 10.7085C12.4598 10.2847 12.8079 9.93992 13.2358 9.93992C13.4083 9.93992 13.5483 9.79998 13.5483 9.62742V6.69142C13.5483 6.51883 13.4084 6.37892 13.2358 6.37892ZM12.9233 9.34986C12.4018 9.46852 11.9902 9.87748 11.8703 10.396H3.72484C3.60497 9.87748 3.19337 9.46852 2.67191 9.34986V6.96898C3.21387 6.84567 3.63712 6.40886 3.73762 5.86136H11.8576C11.9581 6.40889 12.3814 6.84567 12.9233 6.96898V9.34986H12.9233Z" fill="#71717A"/>
                    <path d="M7.79683 6.28223C6.77914 6.28223 5.95117 7.11016 5.95117 8.12785C5.95117 9.14554 6.77911 9.97351 7.79683 9.97351C8.81455 9.97351 9.64248 9.14557 9.64248 8.12785C9.64248 7.11016 8.81452 6.28223 7.79683 6.28223ZM7.79683 9.34848C7.12377 9.34848 6.57617 8.80091 6.57617 8.12782C6.57617 7.45479 7.12373 6.9072 7.79683 6.9072C8.46992 6.9072 9.01748 7.45476 9.01748 8.12782C9.01748 8.80088 8.46989 9.34848 7.79683 9.34848Z" fill="#71717A"/>
                </svg>
                <a href="#" className={styles.cta__financing_link}>Get financing by <span className={styles.cta__financing_underlined}>Hearth</span></a>
            </div>
            <div className={styles.widget}>
                <BottomWidget>
                    <button className={styles.cta__button}>
                        <p className={styles.cta__button_text}>Buy products</p>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1L5.5 5.16L1.5 9.66667" stroke="white" strokeWidth="1.5"/>
                        </svg>
                    </button>
                    <div className={styles.cta__financing}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.055 3.7334H1.53805C0.983984 3.7334 0.533203 4.18418 0.533203 4.73824V11.5179C0.533203 12.0719 0.983984 12.5227 1.53805 12.5227H14.055C14.6091 12.5227 15.0598 12.0719 15.0598 11.5179V4.73824C15.0598 4.18418 14.6091 3.7334 14.055 3.7334ZM14.4348 11.5179C14.4348 11.7273 14.2644 11.8977 14.055 11.8977H1.53805C1.32861 11.8977 1.1582 11.7273 1.1582 11.5179V4.73824C1.1582 4.5288 1.32861 4.3584 1.53805 4.3584H14.055C14.2644 4.3584 14.4348 4.5288 14.4348 4.73824V11.5179Z" fill="#71717A"/>
                            <path d="M13.2358 6.37892C12.8079 6.37892 12.4598 6.03417 12.4598 5.61036C12.4598 5.59548 12.4603 5.5808 12.4611 5.56614C12.4658 5.48039 12.4351 5.39645 12.3761 5.33408C12.317 5.27167 12.2349 5.23633 12.149 5.23633H3.44609C3.36012 5.23633 3.27797 5.27173 3.21891 5.33423C3.15987 5.39673 3.12919 5.48077 3.13409 5.56661C3.13491 5.58111 3.13534 5.5957 3.13534 5.61036C3.13534 6.03417 2.78722 6.37892 2.35937 6.37892C2.18681 6.37892 2.04688 6.51886 2.04688 6.69142V9.62742C2.04688 9.79998 2.18681 9.93992 2.35937 9.93992C2.78722 9.93992 3.13534 10.2847 3.13534 10.7085C3.13534 10.881 3.27528 11.021 3.44784 11.021H12.1473C12.3199 11.021 12.4598 10.881 12.4598 10.7085C12.4598 10.2847 12.8079 9.93992 13.2358 9.93992C13.4083 9.93992 13.5483 9.79998 13.5483 9.62742V6.69142C13.5483 6.51883 13.4084 6.37892 13.2358 6.37892ZM12.9233 9.34986C12.4018 9.46852 11.9902 9.87748 11.8703 10.396H3.72484C3.60497 9.87748 3.19337 9.46852 2.67191 9.34986V6.96898C3.21387 6.84567 3.63712 6.40886 3.73762 5.86136H11.8576C11.9581 6.40889 12.3814 6.84567 12.9233 6.96898V9.34986H12.9233Z" fill="#71717A"/>
                            <path d="M7.79683 6.28223C6.77914 6.28223 5.95117 7.11016 5.95117 8.12785C5.95117 9.14554 6.77911 9.97351 7.79683 9.97351C8.81455 9.97351 9.64248 9.14557 9.64248 8.12785C9.64248 7.11016 8.81452 6.28223 7.79683 6.28223ZM7.79683 9.34848C7.12377 9.34848 6.57617 8.80091 6.57617 8.12782C6.57617 7.45479 7.12373 6.9072 7.79683 6.9072C8.46992 6.9072 9.01748 7.45476 9.01748 8.12782C9.01748 8.80088 8.46989 9.34848 7.79683 9.34848Z" fill="#71717A"/>
                        </svg>
                        <a href="#" className={styles.cta__financing_link}>Get financing by <span className={styles.cta__financing_underlined}>Hearth</span></a>
                    </div>
                </BottomWidget>
            </div>
        </div>
    );
}

export default Summary;