import {GetStaticProducts} from "../../src/preRender/ISR";
import LayoutProduct from "../../src/components/LayoutProduct/LayoutProduct";
import ProductsGrid from "../../src/layouts/ProductsGrid/ProductsGrid";

const Products = ({products}) => {
    return (
        <div className="container">
            <ProductsGrid>
                {
                    products.map(product => {
                        return <LayoutProduct key={product?.id} image={product?.presentationImage} />
                    })
                }
            </ProductsGrid>
        </div>
    );
}

export const getStaticProps = GetStaticProducts;

export default Products;
