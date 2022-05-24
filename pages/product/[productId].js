import Product from "../../src/components/Product/Product";
import {GetProduct} from "../../src/preRender/SSR";

const ProductId = (product) => {
    return (
        <div className='container'>
            <Product product={product}/>
        </div>
    );
}

export const getServerSideProps = GetProduct;

export default ProductId;