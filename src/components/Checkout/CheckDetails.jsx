import styles from './CheckDetails.module.css';
import CheckoutColor from "./atoms/CheckoutColor/CheckoutColor";
import CheckouFeature from "./atoms/CheckoutFeature/CheckouFeature";
import CheckoutTitle from "./atoms/CheckoutTitle/CheckoutTitle";
import CheckoutProductPrice from "./atoms/CheckoutProductPrice/CheckoutProductPrice";
import CheckoutCounter from "./atoms/CheckoutCounter/CheckoutCounter";
import DeleteCross from "./atoms/DeleteCross/DeleteCross";
import EditPen from "./atoms/EditPen/EditPen";
import {useReactiveVar} from "@apollo/client";
import {checkoutProducts} from "../../apolloClient/reactiveVariables/checkout";
import CheckoutProductImage from "./atoms/CheckoutProductImage/CheckoutProductImage";
import CheckoutInternalColor from "./atoms/CheckoutInternalColor/CheckoutInternalColor";
import CheckoutLayout from "../../layouts/CheckoutLayout/CheckoutLayout";
import Summary from "./atoms/Summary/Summary";
import CheckoutEmpty from "./atoms/CheckoutEmpty/CheckoutEmpty";
import CheckoutRoadmap from "./atoms/CheckoutRoadmap/CheckoutRoadmap";

const CheckDetails = () => {
    const checkout = useReactiveVar(checkoutProducts);

    return (
        <>
            {
                !checkout?.length
                ?
                <CheckoutEmpty/>
                :
                <>
                    <CheckoutRoadmap isFinal={false}/>
                    <CheckoutLayout>
                        <div>
                            <h1 className={styles.order__title}>Order</h1>
                            {
                                checkout?.length
                                    ?
                                    checkout.map((p,idx) => {
                                        return  <div className={styles.container} key={idx}>
                                            <div className={styles.image}>
                                                <CheckoutProductImage
                                                    url={p.product?.checkoutThumbnail?.url}
                                                    width={p.product?.checkoutThumbnail?.width}
                                                    height={p.product?.checkoutThumbnail?.height}
                                                />
                                            </div>
                                            <div className={styles.title}>
                                                <CheckoutTitle title={p.product?.info?.title}/>
                                            </div>
                                            <div className={styles.colors}>
                                                <CheckoutColor
                                                    color={p.product?.colors[0]?.color?.hex}
                                                    text={p.product?.colors[0].title}
                                                    productId={p?.product?.id}
                                                    isEditable={p?.isEditable}
                                                    initialPrice={p?.initialPrice}
                                                    uniqueId={p?.product?.uniqueId}
                                                />
                                            </div>
                                            <div className={styles.internal}>
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
                                            <div className={styles.features}>
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
                                            <div className={styles.price}>
                                                <CheckoutProductPrice
                                                    currentPrice={(p?.price + p?.calculatePrice + p.internalColorPrice)}
                                                    previousPrice={p.product?.price?.previousPrice}
                                                />
                                            </div>
                                            <div className={styles.counter}>
                                                <CheckoutCounter quantity={p?.quantity} productId={p?.product?.uniqueId}/>
                                            </div>
                                            <div className={styles.cross}>
                                                <DeleteCross productId={p?.product?.uniqueId}/>
                                            </div>
                                            <div className={styles.pen}>
                                                <EditPen productId={p?.product?.uniqueId} isEnabled={p?.isEditable}/>
                                            </div>
                                        </div>
                                    })
                                    :
                                    <></>
                            }
                        </div>
                        <Summary/>
                    </CheckoutLayout>
                </>
            }
        </>
    );
}

export default CheckDetails;