import {GetStaticProducts} from "../../src/preRender/ISR";
import LayoutProductContainer from "../../src/components/LayoutProduct/LayoutProductContainer";
import {
    productsVar,
    currentProductsVar,
    currentCategoryVar,
    currentFilterVar
} from "../../src/apolloClient/reactiveVariables/products";
import Footer from "../../src/components/Footer/Footer";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";
import BreadCrumbs from "../../src/components/global/BreadCrumbs/BreadCrumbs";

const Products = ({products, footer, header}) => {
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
        <>
            <div className="container">
                <HeaderTop
                    productLinks={header?.productLinks}
                    favicon={header?.favicon?.url}
                    otherLinks={header?.otherLinks}
                    logoUrl={header?.logo?.url}
                />
                <BreadCrumbs master={'Store'}/>
                <LayoutProductContainer/>
            </div>
            <Footer footer={footer}/>
        </>
    );
}

export const getStaticProps = GetStaticProducts;

export default Products;
