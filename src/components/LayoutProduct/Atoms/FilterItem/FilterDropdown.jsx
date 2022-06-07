import styles from './FilterDropdown.module.css';
import {currentFilterVar} from "../../../../apolloClient/reactiveVariables/products";

const FilterDropdown = ({name, isCurrent = false}) => {
    const current = isCurrent ? styles.current : '';

    return <li
        className={`${styles.item} ${current}`}
        onClick={() => currentFilterVar({showDropdown: !currentFilterVar().showDropdown, currentFilter: name})}
    >
        {name}
    </li>
}

export default FilterDropdown;