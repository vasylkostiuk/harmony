import styles from './ProductInfo.module.css';
import Badge from "../Badge/Badge";
import ProductParameters from "../ProductParameters/ProductParameters";
import ProductImage from "../ProductImage/ProductImage";

const ProductInfo = ({title, badgeText, description, parameters, imageDescription}) => {
    return (
        <>
            <div className={styles.heading}>
                <h1 className={styles.title}>{title}</h1>
                {
                    badgeText
                    ?
                        <Badge text={badgeText}/>
                    :
                        <></>
                }

            </div>
            <div className={styles.image}>
                <ProductImage imageDescription={imageDescription}/>
            </div>
            <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}></p>
            <ProductParameters
                area={parameters?.area}
                diameter={parameters?.diameter}
                maxHeight={parameters?.maximumHeight}
                weight={parameters?.weight}
            />
        </>
    );
}

export default ProductInfo;