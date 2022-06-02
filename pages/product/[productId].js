import Product from "../../src/components/Product/Product";
import {GetStaticProduct, GetStaticProductsPath} from "../../src/preRender/ISR";

const ProductId = (product) => {
    return (
        <div className='container'>
            <Product product={product}/>
        </div>
    );
}

export const getStaticPaths = GetStaticProductsPath;

export const getStaticProps = GetStaticProduct;

export default ProductId;