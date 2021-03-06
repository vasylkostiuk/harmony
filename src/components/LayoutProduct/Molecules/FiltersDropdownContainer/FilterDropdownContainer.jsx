import FilterItem from "../../Atoms/FilterItem/FilterItem";
import FilterDropdown from "../../Atoms/FilterItem/FilterDropdown";
import {currentFilterVar, currentProductsVar, filteredProductsVar, currentCategoryVar} from "../../../../apolloClient/reactiveVariables/products";
import {useReactiveVar} from "@apollo/client";
import styles from './FilterDropdownContainer.module.css';
import {useEffect} from "react";

const FilterDropdownContainer = () => {
    const {showDropdown, currentFilter} = useReactiveVar(currentFilterVar);
    const products = useReactiveVar(currentProductsVar);
    const category = useReactiveVar(currentCategoryVar);
    const productsCopy = [...products];

    const dropDownItems = ['New products', 'Most popular', 'Price hight-low', 'Price low-hight'];

    function filterByParams(filter) {
        switch (filter) {
            case 'New products':
                return filteredProductsVar([]);
            case 'Most popular':
                return filteredProductsVar(productsCopy.sort((a,b) => b.visionCount - a.visionCount ));
            case 'Price hight-low':
                return filteredProductsVar(productsCopy.sort((a,b) => b.price?.currentPrice - a.price?.currentPrice ));
            case 'Price low-hight':
                return filteredProductsVar(productsCopy.sort((a,b) => a.price?.currentPrice - b.price?.currentPrice ));
        }
    }

    useEffect(() => {
        filterByParams(currentFilter);
    }, [currentFilter, category])

    return (
        <div className={styles.container}>
            <FilterItem/>
            <div className={styles.dropdown__container}>
                {
                    showDropdown &&
                    dropDownItems.map(item => {
                        return <FilterDropdown name={item} key={item} isCurrent={currentFilter === item}/>
                    })
                }
            </div>
        </div>
    );
}

export default FilterDropdownContainer;