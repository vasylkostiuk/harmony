import styles from './FilterItem.module.css';
import {currentFilterVar} from "../../../../apolloClient/reactiveVariables/products";

const FilterItem = () => {
    const {currentFilter} = currentFilterVar();
    return (
        <div
            className={styles.container}
            onClick={() => currentFilterVar({showDropdown: !currentFilterVar().showDropdown, currentFilter: currentFilter})}
        >
            <p className={styles.text}>{currentFilter}</p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.66406 6.33203L7.82406 10.332L12.3307 6.33203" stroke="black" strokeWidth="1.5"/>
            </svg>
        </div>
    );
}

export default FilterItem;