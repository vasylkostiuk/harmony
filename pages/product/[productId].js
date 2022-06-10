import Product from "../../src/components/Product/Product";
import {GetStaticProduct, GetStaticProductsPath} from "../../src/preRender/ISR";
import {useMutation} from "@apollo/client";
import {INCREASE_PRODUCT_COUNT} from "../../src/apolloClient/mutations";
import {useEffect} from "react";

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
        <div className='container'>
            <Product product={product}/>
        </div>
    );
}

export const getStaticPaths = GetStaticProductsPath;

export const getStaticProps = GetStaticProduct;

export default ProductId;