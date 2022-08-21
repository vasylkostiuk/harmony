import styles from './CategoriesLayout.module.css';

const CategoriesLayout = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default CategoriesLayout;