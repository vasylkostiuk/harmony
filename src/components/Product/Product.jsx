import styles from './Product.module.css';
import Sticky from "../../layouts/Sticky/Sticky";
import ProductImage from "./Atoms/ProductImage/ProductImage";
import ProductCta from "./Atoms/ProductCta/ProductCta";
import ProductLayout from "./Molecules/ProductLayout";
import {currentProductsVar} from "../../apolloClient/reactiveVariables/currentProduct";
import ExtendedSlider from "../../layouts/ExtendedSlider/ExtendedSlider";
import FakeRenderer from "../FakeRenderer/FakeRenderer";

const Product = (product) => {
  const currentProduct = product.product.product;
  const {
      badge,
      image,
      info,
      parameters,
      price,
      colors,
      imageGallery
  } = currentProduct;

    currentProductsVar({
        ...currentProductsVar(),
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
              <ExtendedSlider images={imageGallery.galleryImage.map(image => image.url)}/>
              {/*<CenteredSlider images={imageGallery.galleryImage.map(image => image.url)}/>*/}
              {/*<Modal>*/}
              {/*    <CenteredSlider images={imageGallery.galleryImage.map(image => image.url)}/>*/}
              {/*</Modal>*/}
              {
                  colors.map(color => {
                      return <FakeRenderer url={color?.image?.url} key={color?.id}/>
                  })
              }
          </div>
      </>
  );
}

export default Product;