import {GetStaticProducts} from "../../src/preRender/ISR";
import LayoutProductContainer from "../../src/components/LayoutProduct/LayoutProductContainer";
import {
    productsVar,
    currentProductsVar,
    currentCategoryVar,
    currentFilterVar
} from "../../src/apolloClient/reactiveVariables/products";

const Products = ({products}) => {
    productsVar([...products]);
    currentProductsVar([...products]);
    currentCategoryVar('All products');
    currentFilterVar(
        {
            showDropdown: false,
            currentFilter: 'New products'
        }
    );

    return (
        <div className="container">
           <LayoutProductContainer/>
        </div>
    );
}

export const getStaticProps = GetStaticProducts;

export default Products;
