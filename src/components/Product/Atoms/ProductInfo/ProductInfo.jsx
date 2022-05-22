import styles from './ProductInfo.module.css';
import Badge from "../Badge/Badge";
import ProductParameters from "../ProductParameters/ProductParameters";

const ProductInfo = ({title, badgeText, description}) => {
    return (
        <div>
            <div className={styles.heading}>
                <h1 className={styles.title}>{title}</h1>
                <Badge text={badgeText}/>
            </div>
            <p className={styles.description}>{description}</p>
            <ProductParameters area={'1'} diameter={'1'} maxHeight={'1'} weight={'1'}/>
        </div>
    );
}

export default ProductInfo;