import styles from './Product.module.css';
import Sticky from "../../layouts/Sticky/Sticky";
import ProductImage from "./Atoms/ProductImage/ProductImage";
import ProductCta from "./Atoms/ProductCta/ProductCta";
import ProductLayout from "./Molecules/ProductLayout";

const Product = (product) => {
  const currentProduct = product.product.product;
  const {
      badge,
      image,
      info,
      parameters,
      price
  } = currentProduct;

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
                     />
                 </div>
                 <div>
                     <ProductImage imgSrc={image?.url} width={image?.width} height={image?.height}/>
                     <ProductCta currentPrice={price?.currentPrice} previousPrice={price?.previousPrice} />
                 </div>
             </Sticky>
          </div>
      </>
  );
}

export default Product;