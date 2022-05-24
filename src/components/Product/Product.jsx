import styles from './Product.module.css';
import Sticky from "../../layouts/Sticky/Sticky";
import ProductInfo from "./Atoms/ProductInfo/ProductInfo";
import ProductParameters from "./Atoms/ProductParameters/ProductParameters";
import ProductImage from "./Atoms/ProductImage/ProductImage";
import ProductCta from "./Atoms/ProductCta/ProductCta";

const Product = (product) => {
  return (
      <>
          <div className={styles.mobile}>
              <ProductInfo/>
              {/*<ProductImage/>*/}
          </div>
          <div className={styles.desktop}>
             <Sticky>
                 <div>
                     <ProductInfo/>
                 </div>
                 <div>
                     {/*<ProductImage/>*/}
                     <ProductCta/>
                 </div>
             </Sticky>
          </div>
      </>
  );
}

export default Product;