import Product from "../../src/components/Product/Product";
import {GetProduct} from "../../src/preRender/SSR";

const ProductId = (product) => {
    return (
       <Product product={product}/>
    );
}

export const getServerSideProps = GetProduct;

export default ProductId;