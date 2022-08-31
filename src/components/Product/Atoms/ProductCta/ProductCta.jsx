import styles from './ProductCta.module.css';
import {useQuery, useReactiveVar} from "@apollo/client";
import {currentProductsVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import {GET_PRODUCT} from "../../../../apolloClient/queries";
import {useRouter} from "next/router";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {featuresIntersection} from "../../../../services/intersection";
import Link from "next/link";

const ProductCta = ({previousPrice}) => {
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
                initialPrice
            }
        ]);
    }

    return (
        <div className={styles.container}>
            <div className={styles.price__container}>
                <p className={styles.price__current}>$ {calculatePrice + price + internalColorPrice}</p>
                {
                    previousPrice &&
                    <p className={styles.price__previous}>$ {previousPrice}</p>
                }
            </div>
            <div className={styles.cta__container}>
                <Link href={`/checkout/checkdetails`} passHref>
                    <button className={styles.cta__button} onClick={() => addToCart(data?.product)}>
                        <p className={styles.cta__button_text}>Add to cart</p>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 2L3.5 6V20C3.5 20.5304 3.71071 21.0391 4.08579 21.4142C4.46086 21.7893 4.96957 22 5.5 22H19.5C20.0304 22 20.5391 21.7893 20.9142 21.4142C21.2893 21.0391 21.5 20.5304 21.5 20V6L18.5 2H6.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 6H21.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.5 10C16.5 11.0609 16.0786 12.0783 15.3284 12.8284C14.5783 13.5786 13.5609 14 12.5 14C11.4391 14 10.4217 13.5786 9.67157 12.8284C8.92143 12.0783 8.5 11.0609 8.5 10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </Link>
                <div className={styles.cta__financing}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.055 3.7334H1.53805C0.983984 3.7334 0.533203 4.18418 0.533203 4.73824V11.5179C0.533203 12.0719 0.983984 12.5227 1.53805 12.5227H14.055C14.6091 12.5227 15.0598 12.0719 15.0598 11.5179V4.73824C15.0598 4.18418 14.6091 3.7334 14.055 3.7334ZM14.4348 11.5179C14.4348 11.7273 14.2644 11.8977 14.055 11.8977H1.53805C1.32861 11.8977 1.1582 11.7273 1.1582 11.5179V4.73824C1.1582 4.5288 1.32861 4.3584 1.53805 4.3584H14.055C14.2644 4.3584 14.4348 4.5288 14.4348 4.73824V11.5179Z" fill="#71717A"/>
                        <path d="M13.2358 6.37892C12.8079 6.37892 12.4598 6.03417 12.4598 5.61036C12.4598 5.59548 12.4603 5.5808 12.4611 5.56614C12.4658 5.48039 12.4351 5.39645 12.3761 5.33408C12.317 5.27167 12.2349 5.23633 12.149 5.23633H3.44609C3.36012 5.23633 3.27797 5.27173 3.21891 5.33423C3.15987 5.39673 3.12919 5.48077 3.13409 5.56661C3.13491 5.58111 3.13534 5.5957 3.13534 5.61036C3.13534 6.03417 2.78722 6.37892 2.35937 6.37892C2.18681 6.37892 2.04688 6.51886 2.04688 6.69142V9.62742C2.04688 9.79998 2.18681 9.93992 2.35937 9.93992C2.78722 9.93992 3.13534 10.2847 3.13534 10.7085C3.13534 10.881 3.27528 11.021 3.44784 11.021H12.1473C12.3199 11.021 12.4598 10.881 12.4598 10.7085C12.4598 10.2847 12.8079 9.93992 13.2358 9.93992C13.4083 9.93992 13.5483 9.79998 13.5483 9.62742V6.69142C13.5483 6.51883 13.4084 6.37892 13.2358 6.37892ZM12.9233 9.34986C12.4018 9.46852 11.9902 9.87748 11.8703 10.396H3.72484C3.60497 9.87748 3.19337 9.46852 2.67191 9.34986V6.96898C3.21387 6.84567 3.63712 6.40886 3.73762 5.86136H11.8576C11.9581 6.40889 12.3814 6.84567 12.9233 6.96898V9.34986H12.9233Z" fill="#71717A"/>
                        <path d="M7.79683 6.28223C6.77914 6.28223 5.95117 7.11016 5.95117 8.12785C5.95117 9.14554 6.77911 9.97351 7.79683 9.97351C8.81455 9.97351 9.64248 9.14557 9.64248 8.12785C9.64248 7.11016 8.81452 6.28223 7.79683 6.28223ZM7.79683 9.34848C7.12377 9.34848 6.57617 8.80091 6.57617 8.12782C6.57617 7.45479 7.12373 6.9072 7.79683 6.9072C8.46992 6.9072 9.01748 7.45476 9.01748 8.12782C9.01748 8.80088 8.46989 9.34848 7.79683 9.34848Z" fill="#71717A"/>
                    </svg>
                    <a href="#" className={styles.cta__financing_link}>Get financing by <span className={styles.cta__financing_underlined}>Hearth</span></a>
                </div>
            </div>
        </div>
    );
}

export default ProductCta;