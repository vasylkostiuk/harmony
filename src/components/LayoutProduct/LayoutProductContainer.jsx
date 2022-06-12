import styles from './LayoutProductContainer.module.css';
import {
    currentProductsVar,
    filteredProductsVar,
    paginationStepVar
} from "../../apolloClient/reactiveVariables/products";
import {useReactiveVar} from "@apollo/client";
import LayoutProduct from "./LayoutProduct";
import ProductsGrid from "../../layouts/ProductsGrid/ProductsGrid";
import FiltersContainer from "./Molecules/FiltersContainer/FiltersContainer";
import LoadMoreBtn from "./Atoms/LoadMoreBtn/LoadMoreBtn";
import {paginateProducts, paginationCalculate} from "../../services/pagination";

const LayoutProductContainer = () => {
    const currentProducts = useReactiveVar(currentProductsVar);
    const filteredProducts = useReactiveVar(filteredProductsVar);
    const paginationStep = useReactiveVar(paginationStepVar);

    const products = filteredProducts?.length ? filteredProducts : currentProducts;

    return (
        <>
            <h1 className={styles.title}>Store</h1>
            <FiltersContainer/>
            <ProductsGrid>
                {
                    paginateProducts(products, paginationStep).map(product => {
                        return <LayoutProduct
                            key={product?.id}
                            image={product?.presentationImage}
                            badge={product?.badge}
                            title={product?.info?.title}
                            description={product?.shortDescription}
                            previousPrice={product?.price?.previousPrice}
                            currentPrice={product?.price?.currentPrice}
                            productId={product?.id}
                        />
                    })
                }
            </ProductsGrid>
            {
                !paginationCalculate(products?.length, paginationStep) &&
                <LoadMoreBtn paginationStep={paginationStep}/>
            }

        </>
    );
}

export default LayoutProductContainer;