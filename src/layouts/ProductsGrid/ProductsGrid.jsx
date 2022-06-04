import styles from './ProductsGrid.module.css';

const ProductsGrid = ({children}) => {
    console.log(children.length)

    function buildGrid() {
        if (!children?.length) {
            return styles.one
        } else if (children?.length === 2) {
            return styles.two
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