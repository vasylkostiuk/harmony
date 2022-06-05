import styles from './CategoryItem.module.css';

const CategoryItem = ({name, cb, isCurrent}) => {
    const current = isCurrent ? styles.current : '';

    return (
        <p className={`${styles.category} ${current}`} onClick={cb}>{name}</p>
    );
}

export default CategoryItem;