import styles from './ProductInfo.module.css';
import Badge from "../Badge/Badge";

const ProductInfo = ({title, badgeText, description}) => {
    return (
        <div>
            <div className={styles.heading}>
                <h1 className={styles.title}>{title}</h1>
                <Badge text={badgeText}/>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
}

export default ProductInfo;