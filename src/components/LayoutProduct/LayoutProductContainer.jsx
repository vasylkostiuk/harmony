import {currentProductsVar} from "../../apolloClient/reactiveVariables/products";
import {useReactiveVar} from "@apollo/client";
import LayoutProduct from "./LayoutProduct";
import ProductsGrid from "../../layouts/ProductsGrid/ProductsGrid";
import FiltersContainer from "./Molecules/FiltersContainer/FiltersContainer";

const LayoutProductContainer = () => {
    const currentProducts = useReactiveVar(currentProductsVar);

    return (
        <>
            <FiltersContainer/>
            <ProductsGrid>
                {
                    currentProducts.map(product => {
                        return <LayoutProduct
                            key={product?.id}
                            image={product?.presentationImage}
                            badge={product?.badge}
                            title={product?.info?.title}
                            description={product?.info?.description}
                            previousPrice={product?.price?.previousPrice}
                            currentPrice={product?.price?.currentPrice}
                            productId={product?.id}
                        />
                    })
                }
            </ProductsGrid>
        </>
    );
}

export default LayoutProductContainer;