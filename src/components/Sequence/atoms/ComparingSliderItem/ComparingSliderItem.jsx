import styles from './ComparingSliderItem.module.css';
import ProductParameters from "../../../Product/Atoms/ProductParameters/ProductParameters";
import Link from "next/link";

const ComparingSliderItem = ({product}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image__container}>
                <img src={`${product?.comparingImage?.url}?fit:crop/quality=value:75/output=format:webp/compress`}
                     className={styles.image}
                     alt="Harmony Domes"
                />
            </div>
            <h4 className={styles.title}>{product?.info?.title}</h4>
            <div className={styles.parameters__container}>
                <ProductParameters parameters={product?.parameters} isInSlider={true}/>
            </div>
            <div className={styles.price__container}>
                <p className={styles.price__prefix}>from</p>
                <p className={styles.price}>${product?.price?.currentPrice}</p>
            </div>
            <Link href={`/product/${product?.id}`} passHref>
                <div className={styles.button}>Buy product</div>
            </Link>
        </div>
    );
}

export default ComparingSliderItem;