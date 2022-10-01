import styles from './ProductCta.module.css';
import {useQuery, useReactiveVar} from "@apollo/client";
import {currentProductsVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import {GET_PRODUCT} from "../../../../apolloClient/queries";
import {useRouter} from "next/router";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {featuresIntersection} from "../../../../services/intersection";
import ErrorBanner from "../../../global/ErrorBanner/ErrorBanner";
import {useState} from "react";

const ProductCta = ({previousPrice, creditInfo}) => {
    const {
        calculatePrice,
        price,
        initialPrice,
        internalColorPrice,
        currentColor,
        currentFeatures,
        currentInternalColor
    } = useReactiveVar(currentProductsVar);
    const {query} = useRouter();
    const [showError, setShowError] = useState(false);


    const {data} = useQuery(GET_PRODUCT, {
        variables: {
            id: query?.productId
        },
        fetchPolicy: 'no-cache'
    })

    function addToCart(product) {
        checkoutProducts([
            ...checkoutProducts(),
            {
                product: {
                    ...product,
                    uniqueId: product?.id + Math.random(),
                    colors: product?.colors?.filter(c => c.title === currentColor),
                    extraFeatures: featuresIntersection(product?.extraFeatures, currentFeatures),
                    internalColor: product?.internalColor.filter(c => c.title === currentInternalColor),
                },
                quantity: 1,
                isEditable: false,
                calculatePrice,
                internalColorPrice,
                price,
                initialPrice,
                creditInfo
            }
        ]);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.price__container}>
                    <p className={styles.price__current}>$ {calculatePrice + price + internalColorPrice}</p>
                    {
                        previousPrice &&
                        <p className={styles.price__previous}>$ {previousPrice}</p>
                    }
                </div>
                <div className={styles.cta__container}>
                    <button
                        className={styles.cta__button}
                        onClick={() => {
                            addToCart(data?.product)
                            setShowError(!showError)
                        }}
                    >
                        <p className={styles.cta__button_text}>Add to cart</p>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 2L3.5 6V20C3.5 20.5304 3.71071 21.0391 4.08579 21.4142C4.46086 21.7893 4.96957 22 5.5 22H19.5C20.0304 22 20.5391 21.7893 20.9142 21.4142C21.2893 21.0391 21.5 20.5304 21.5 20V6L18.5 2H6.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 6H21.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.5 10C16.5 11.0609 16.0786 12.0783 15.3284 12.8284C14.5783 13.5786 13.5609 14 12.5 14C11.4391 14 10.4217 13.5786 9.67157 12.8284C8.92143 12.0783 8.5 11.0609 8.5 10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className={styles.cta__financing}>
                        <img src={creditInfo?.icon?.url} alt="Harmony Domes" className={styles.cta__financing_icon}/>
                        <a href={creditInfo?.lInk} className={styles.cta__financing_link}>{creditInfo?.text} <span className={styles.cta__financing_underlined}>{creditInfo?.linkText}</span></a>
                    </div>
                </div>
            </div>
            <ErrorBanner
                isDisplayed={showError}
                title={'Product Added'}
                description={'You can see checkout at the top of the page'}
                isPositive={true}
            />
        </>
    );
}

export default ProductCta;