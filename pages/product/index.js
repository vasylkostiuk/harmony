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
import HeadGenerator from "../../src/components/global/HeadGenerator/HeadGenerator";

const SEOdata = {
    title: 'Buy Commercial & Residential Domes | Domes Store Denver CO | Geodesic Domes Showroom Store',
    description: 'Shop here for Geodesic Domes, multiple sizes and fully customizable. Harmony Domes Located in Colorful Colorado.',
    keywords: 'Shop Geo Domes, Buy European Domes, Geodesic Domes For Sale Denver, Glamping Domes For Sale, online domes shopping cart, domes for sale online'
}

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
            <HeadGenerator
                title={SEOdata?.title}
                keywords={SEOdata?.keywords}
                description={SEOdata?.description}
            />
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
