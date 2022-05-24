import styles from './ProductInfo.module.css';
import Badge from "../Badge/Badge";
import ProductParameters from "../ProductParameters/ProductParameters";
import ProductImage from "../ProductImage/ProductImage";

const ProductInfo = ({title, badgeText, description, parameters, imgSrc}) => {
    return (
        <>
            <div className={styles.heading}>
                <h1 className={styles.title}>{title}</h1>
                <Badge text={badgeText}/>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.image}>
                <ProductImage imgSrc={imgSrc}/>
            </div>
            <ProductParameters
                area={parameters?.area}
                diameter={parameters?.diameter}
                maxHeight={parameters?.maxHeight}
                weight={parameters?.weight}
            />
        </>
    );
}

export default ProductInfo;