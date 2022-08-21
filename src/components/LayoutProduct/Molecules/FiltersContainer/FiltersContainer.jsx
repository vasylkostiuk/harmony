import styles from './FiltersContainer.module.css';
import CategoriesLayout from "../../../global/LoadCircle/layouts/CategoriesLayout/CategoriesLayout";
import CategoryItem from "../../Atoms/CategoryItem/CategoryItem";
import {useReactiveVar} from "@apollo/client";
import {currentProductsVar, productsVar, currentCategoryVar} from "../../../../apolloClient/reactiveVariables/products";
import FilterDropdownContainer from "../FiltersDropdownContainer/FilterDropdownContainer";

const FiltersContainer = () => {
    const products = useReactiveVar(productsVar);
    const currentCategory = useReactiveVar(currentCategoryVar);


    function extractCategories(products) {
        const allCategories = ['All products', ...products.map(product => product?.category)];
        return [...new Set(allCategories)];
    }

    function correctFiltering(idx, category) {
        if (idx === 0) {
            return currentProductsVar([...products]);
        }
        return currentProductsVar(products.filter(p => p.category === category))
    }

    const categories = extractCategories(products);

    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <CategoriesLayout>
                    {
                        categories && categories?.length &&
                        categories.map((category, idx) => {
                           return <CategoryItem
                               key={category}
                               name={category}
                               isCurrent={category === currentCategory}
                               cb={() => correctFiltering(idx, category)}
                           />
                        })
                    }
                </CategoriesLayout>
            </div>
            <div className={styles.second}>
                <FilterDropdownContainer/>
            </div>
        </div>
    );
}

export default FiltersContainer;