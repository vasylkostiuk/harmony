import styles from './ProductInfo.module.css';
import Badge from "../Badge/Badge";
import ProductParameters from "../ProductParameters/ProductParameters";
import ProductImage from "../ProductImage/ProductImage";

const ProductInfo = ({title, badgeText, description, parameters, imgSrc, imgHeight, imgWidth}) => {
    return (
        <>
            <div className={styles.heading}>
                <h1 className={styles.title}>{title}</h1>
                <Badge text={badgeText}/>
            </div>
            <div className={styles.image}>
                <ProductImage imgSrc={imgSrc} width={imgWidth} height={imgHeight}/>
            </div>
            <p className={styles.description}>{description}</p>
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