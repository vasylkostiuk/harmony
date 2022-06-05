import {GetStaticProducts} from "../../src/preRender/ISR";
import LayoutProductContainer from "../../src/components/LayoutProduct/LayoutProductContainer";
import {productsVar} from "../../src/apolloClient/reactiveVariables/products";

const Products = ({products}) => {
    productsVar([...products]);
    return (
        <div className="container">
           <LayoutProductContainer/>
        </div>
    );
}

export const getStaticProps = GetStaticProducts;

export default Products;
