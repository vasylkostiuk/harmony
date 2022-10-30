import styles from './ComparingSliderItem.module.css';
import Image from "next/image";
import ProductParameters from "../../../Product/Atoms/ProductParameters/ProductParameters";
import Link from "next/link";

const ComparingSliderItem = ({product}) => {
    return (
        <div className={styles.container}>
            <Image src={product?.image?.url}
                   width={product?.image?.width}
                   height={product?.image?.height}
                   placeholder="blur"
                   blurDataURL={product?.image?.url}
                   alt="Harmony Domes"
            />
            <h4 className={styles.title}>{product?.info?.title}</h4>
            <div className={styles.parameters__container}>
                <ProductParameters parameters={product?.parameters}/>
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