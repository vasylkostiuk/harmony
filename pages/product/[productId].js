import Product from "../../src/components/Product/Product";
import {GetStaticProduct, GetStaticProductsPath} from "../../src/preRender/ISR";
import {useMutation} from "@apollo/client";
import {INCREASE_PRODUCT_COUNT} from "../../src/apolloClient/mutations";
import {useEffect} from "react";
import Footer from "../../src/components/Footer/Footer";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";

const ProductId = (product) => {
    const [increaseCount] = useMutation(INCREASE_PRODUCT_COUNT, {
        variables: {
            id:  product.product?.id,
            count:  product.product?.visionCount + 1
        }
    });

    useEffect(() => {
        increaseCount();
    }, [product.product?.id]);


    return (
        <>
            <div className='container'>
                <HeaderTop
                    productLinks={product?.header?.productLinks}
                    otherLinks={product?.header?.otherLinks}
                    logoUrl={product?.header?.logo?.url}
                />
                <Product product={product}/>
            </div>
            <Footer footer={product?.footer}/>
        </>
    );
}

export const getStaticPaths = GetStaticProductsPath;

export const getStaticProps = GetStaticProduct;

export default ProductId;