import styles from './ProductsGrid.module.css';

const ProductsGrid = ({children}) => {
    function buildGrid() {
        if (!children?.length || children?.length === 1) {
            return styles.one
        } else if (children?.length === 2) {
            return styles.two
        } else if (children?.length === 7) {
            return styles.even
        } else if (children?.length === 8) {
            return styles.odd
        } else if (children?.length > 7 && (children?.length - 7) % 6 === 0) {
            return styles.even
        } else if (children?.length > 8 && (children?.length - 8) % 6 === 0) {
            return styles.odd
        } else if (children?.length % 2 === 0) {
            return styles.even
        } else if (children?.length % 2 !== 0) {
            return styles.odd
        }

        return "";
    }

    return (
        <div className={`${styles.grid} ${buildGrid()}`}>
            { children }
        </div>
    );
}

export default ProductsGrid;