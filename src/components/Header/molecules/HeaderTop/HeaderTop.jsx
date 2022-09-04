import styles from './HeaderTop.module.css';
import checkoutStyles from './../../../Checkout/CheckDetails.module.css';
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
import CheckoutProductImage from "../../../Checkout/atoms/CheckoutProductImage/CheckoutProductImage";
import CheckoutTitle from "../../../Checkout/atoms/CheckoutTitle/CheckoutTitle";
import CheckoutColor from "../../../Checkout/atoms/CheckoutColor/CheckoutColor";
import CheckoutInternalColor from "../../../Checkout/atoms/CheckoutInternalColor/CheckoutInternalColor";
import CheckouFeature from "../../../Checkout/atoms/CheckoutFeature/CheckouFeature";
import CheckoutProductPrice from "../../../Checkout/atoms/CheckoutProductPrice/CheckoutProductPrice";
import CheckoutCounter from "../../../Checkout/atoms/CheckoutCounter/CheckoutCounter";
import DeleteCross from "../../../Checkout/atoms/DeleteCross/DeleteCross";
import EditPen from "../../../Checkout/atoms/EditPen/EditPen";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import CheckoutEmpty from "../../../Checkout/atoms/CheckoutEmpty/CheckoutEmpty";
import {reduceTotalAmount} from "../../../../services/changeCheckoutObj";
import Link from "next/link";
import {useEffect, useRef} from "react";

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
                                                <div className={styles.desktop__link} key={link?.id}>
                                                    <MainLink link={link?.link} text={link?.text}/>
                                                </div>
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
                                        {
                                            checkout.map((p) => {
                                                return (
                                                    <div className={checkoutStyles.container} key={p?.product?.uniqueId}>
                                                        <div className={checkoutStyles.image}>
                                                            <CheckoutProductImage
                                                                url={p.product?.checkoutThumbnail?.url}
                                                                width={p.product?.checkoutThumbnail?.width}
                                                                height={p.product?.checkoutThumbnail?.height}
                                                            />
                                                        </div>
                                                        <div className={checkoutStyles.title}>
                                                            <CheckoutTitle title={p.product?.info?.title}/>
                                                        </div>
                                                        <div className={checkoutStyles.colors}>
                                                            <CheckoutColor
                                                                color={p.product?.colors[0]?.color?.hex}
                                                                text={p.product?.colors[0].title}
                                                                productId={p?.product?.id}
                                                                isEditable={p?.isEditable}
                                                                initialPrice={p?.initialPrice}
                                                                uniqueId={p?.product?.uniqueId}
                                                            />
                                                        </div>
                                                        <div className={checkoutStyles.internal}>
                                                            {
                                                                p.product?.internalColor && p.product?.internalColor?.length
                                                                    ?
                                                                    <CheckoutInternalColor
                                                                        color={p.product?.internalColor[0]?.color?.hex}
                                                                        text={p.product?.internalColor[0].title}
                                                                        productId={p?.product?.id}
                                                                        uniqueId={p?.product?.uniqueId}
                                                                        isEditable={p?.isEditable}
                                                                        isDisplayed={p?.product?.extraFeatures.some(el => el.isEnableInsideColor)}
                                                                    />
                                                                    :
                                                                    <></>
                                                            }
                                                        </div>
                                                        <div className={checkoutStyles.features}>
                                                            {
                                                                p?.product?.extraFeatures && p?.product?.extraFeatures?.length
                                                                    ?
                                                                    p?.product?.extraFeatures.map(f => {
                                                                        return <CheckouFeature
                                                                            key={f?.id}
                                                                            featureId={f?.id}
                                                                            text={f?.title}
                                                                            isEditable={p?.isEditable}
                                                                            productId={p?.product?.uniqueId}
                                                                        />
                                                                    })
                                                                    :
                                                                    <></>
                                                            }
                                                        </div>
                                                        <div className={checkoutStyles.price}>
                                                            <CheckoutProductPrice
                                                                currentPrice={(p?.price + p?.calculatePrice + p.internalColorPrice)}
                                                                previousPrice={p.product?.price?.previousPrice}
                                                            />
                                                        </div>
                                                        <div className={checkoutStyles.counter}>
                                                            <CheckoutCounter quantity={p?.quantity} productId={p?.product?.uniqueId}/>
                                                        </div>
                                                        <div className={checkoutStyles.cross}>
                                                            <DeleteCross productId={p?.product?.uniqueId}/>
                                                        </div>
                                                        <div className={checkoutStyles.pen}>
                                                            <EditPen productId={p?.product?.uniqueId} isEnabled={p?.isEditable}/>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className={styles.summary}>
                                            <div className={styles.summary__amount}>
                                                <div className={summaryStyles.amount__container}>
                                                    <p className={summaryStyles.amount__title}>Total amount</p>
                                                    <p className={summaryStyles.amount__summary}>$ {reduceTotalAmount(checkout)}</p>
                                                </div>
                                            </div>
                                            <div className={styles.summary__button}>
                                                <Link href={'/checkout/checkdetails'} passHref>
                                                    <button className={summaryStyles.cta__button}>
                                                        <p className={summaryStyles.cta__button_text}>Buy products</p>
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