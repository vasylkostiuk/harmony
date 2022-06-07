import styles from './CategoryItem.module.css';
import {currentCategoryVar} from "../../../../apolloClient/reactiveVariables/products";

const CategoryItem = ({name, cb, isCurrent}) => {
    const current = isCurrent ? styles.current : '';

    return (
        <p onClick={cb}>
            <span
                className={`${styles.category} ${current}`}
                onClick={() => currentCategoryVar(name)}
            >
                {name}
            </span>
        </p>
    );
}

export default CategoryItem;