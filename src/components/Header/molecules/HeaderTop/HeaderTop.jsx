import styles from './HeaderTop.module.css';
import summaryStyles from './../../../Checkout/atoms/Summary/Summary.module.css';
import HeaderLogo from "../../atoms/HeaderLogo/HeaderLogo";
import HeaderBasketIcon from "../../atoms/HeaderBasketIcon/HeaderBasketIcon";
import TopLink from "../../atoms/TopLink/TopLink";
import Burger from "../../atoms/Burger/Burger";
import HeaderBody from "../../../global/HeaderBody/HeaderBody";
import MainLink from "../../atoms/MainLink/MainLink";
import SubLink from "../../atoms/SubLink/SubLink";
import {useReactiveVar} from "@apollo/client";
import {showCheckout, showHeaderDropdown} from "../../../../apolloClient/reactiveVariables/header";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import CheckoutEmpty from "../../../Checkout/atoms/CheckoutEmpty/CheckoutEmpty";
import {reduceTotalAmount} from "../../../../services/changeCheckoutObj";
import Link from "next/link";
import {useEffect, useRef} from "react";
import HeaderCheckout from "../../atoms/HeaderCheckout/HeaderCheckout";

const HeaderTop = ({logoUrl, otherLinks, productLinks,  isAbsolute = false}) => {
    const showCheckoutDropdown = useReactiveVar(showCheckout);
    const checkout = useReactiveVar(checkoutProducts);

    const wrapperRef = useRef(null);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    showHeaderDropdown(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useEffect(() => {
        showHeaderDropdown(false);
    }, [])

    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef}>
            <div className={`${styles.global__container} ${isAbsolute ? styles.global__container_hero : ''}`}>
                <div className={styles.container}>
                    <HeaderLogo src={logoUrl}/>
                    <div className={styles.right__container}>
                        <div className={styles.desktop}>
                            <div className={styles.right__container}>
                                {
                                    [{link: '', text: 'Products', id: 132412351}].concat(otherLinks).map((item, idx) => {
                                        return <TopLink
                                            link={item?.link}
                                            text={item?.text}
                                            key={item?.id}
                                            withDropdown={idx !== 0}
                                        />
                                    })
                                }
                            </div>
                        </div>
                        <HeaderBasketIcon/>
                        <div className={styles.mobile}>
                            <Burger/>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderBody>
                {
                    !showCheckoutDropdown
                    ?
                        <>
                            <div className={styles.desktop}>
                                <div className={styles.desktop__links}>
                                    {
                                        productLinks.map(link => {
                                            return (
                                                <MainLink key={link?.id} link={link?.link} text={link?.text}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={styles.mobile}>
                                <div className={styles.mobile__links}>
                                    <MainLink link={''} text={'Products'}/>
                                    {
                                        productLinks.map(link => {
                                            return (
                                                <SubLink link={link?.link} text={link?.text} key={link?.id}/>
                                            )
                                        })
                                    }
                                    <div className={styles.mobile__products_bottom}></div>
                                    {
                                        otherLinks.map(link => {
                                            return (
                                                <MainLink link={link?.link} text={link?.text} key={link?.id}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    :
                        <div className={styles.checkout}>
                            {
                                checkout?.length
                                    ?
                                    <>
                                        <h3 className={styles.checkout__title}>Cart</h3>
                                        <HeaderCheckout/>
                                        <div className={styles.summary}>
                                            <div className={styles.summary__amount}>
                                                <div className={summaryStyles.amount__container}>
                                                    <p className={summaryStyles.amount__title}>Total amount</p>
                                                    <p className={summaryStyles.amount__summary}>$ {reduceTotalAmount(checkout)}</p>
                                                </div>
                                            </div>
                                            <div className={styles.summary__button}>
                                                <Link href={'/checkout/checkdetails'} passHref>
                                                    <button
                                                        className={summaryStyles.cta__button}
                                                        style={{display: 'flex'}}
                                                    >
                                                        <p
                                                           className={summaryStyles.cta__button_text}
                                                           style={{display: 'flex'}}
                                                        >
                                                            Checkout
                                                        </p>
                                                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.5 1L5.5 5.16L1.5 9.66667" stroke="white" strokeWidth="1.5"/>
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </>
                                    :
                                    <CheckoutEmpty/>
                            }
                        </div>
                }
            </HeaderBody>
        </div>
    );
}

export default HeaderTop;