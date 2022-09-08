import styles from './HeaderCheckout.module.css';
import CheckoutProductImage from "../../../Checkout/atoms/CheckoutProductImage/CheckoutProductImage";
import {useReactiveVar} from "@apollo/client";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import CheckoutCounter from "../../../Checkout/atoms/CheckoutCounter/CheckoutCounter";
import CheckoutProductPrice from "../../../Checkout/atoms/CheckoutProductPrice/CheckoutProductPrice";
import DeleteCross from "../../../Checkout/atoms/DeleteCross/DeleteCross";
import CheckoutTitle from "../../../Checkout/atoms/CheckoutTitle/CheckoutTitle";

const HeaderCheckout = () => {
    const checkout = useReactiveVar(checkoutProducts);

    return (
      <>
          {
              checkout?.length
                  ?
                  checkout.map((p) => {
                      return (
                          <div className={styles.container} key={p?.uniqueId}>
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
                              <div className={styles.counter}>
                                  <CheckoutCounter quantity={p?.quantity} productId={p?.product?.uniqueId}/>
                              </div>
                              <div className={styles.price}>
                                  <CheckoutProductPrice
                                      currentPrice={(p?.price + p?.calculatePrice + p.internalColorPrice)}
                                      previousPrice={p.product?.price?.previousPrice}
                                      isHeaderVersion={true}
                                  />
                              </div>
                              <div className={styles.cross}>
                                  <DeleteCross productId={p?.product?.uniqueId}/>
                              </div>
                          </div>
                      )
                  })
              :
                  <></>
          }
      </>
    );
}

export default HeaderCheckout;