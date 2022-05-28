import styles from './Product.module.css';
import Sticky from "../../layouts/Sticky/Sticky";
import ProductImage from "./Atoms/ProductImage/ProductImage";
import ProductCta from "./Atoms/ProductCta/ProductCta";
import ProductLayout from "./Molecules/ProductLayout";
import {currentProductVar} from "../../apolloClient/reactiveVariables/currentProduct";

const Product = (product) => {
  const currentProduct = product.product.product;
  const {
      badge,
      image,
      info,
      parameters,
      price,
      colors
  } = currentProduct;

    currentProductVar({
        ...currentProductVar(),
        url: image?.url,
        width: image?.width,
        height: image?.height,
        initialPrice: price?.currentPrice,
        price: price?.currentPrice,
        currentColor: colors?.length ? colors[0]?.title : undefined
    });


  return (
      <>
          <div className={styles.mobile}>
              <ProductLayout
                  productTitle={info?.title}
                  productDescription={info?.description}
                  badgeText={badge}
                  productParameters={parameters}
                  imgSrc={image?.url}
                  width={image?.width}
                  height={image?.height}
                  colors={currentProduct?.colors}
                  extraFeatures={currentProduct?.extraFeatures}
                  previousPrice={price?.previousPrice}
              />
          </div>
          <div className={styles.desktop}>
             <Sticky>
                 <div>
                     <ProductLayout
                         productTitle={info?.title}
                         productDescription={info?.description}
                         badgeText={badge}
                         productParameters={parameters}
                         imgSrc={image?.url}
                         width={image?.width}
                         height={image?.height}
                         colors={currentProduct?.colors}
                         extraFeatures={currentProduct?.extraFeatures}
                         previousPrice={price?.previousPrice}
                     />
                 </div>
                 <div>
                     <ProductImage/>
                     <ProductCta previousPrice={price?.previousPrice}/>
                 </div>
             </Sticky>
          </div>
      </>
  );
}

export default Product;