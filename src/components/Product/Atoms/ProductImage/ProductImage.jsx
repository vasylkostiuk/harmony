import Image from "next/image";
import styles from './ProductImage.module.css';

const ProductImage = ({imgSrc}) => {
    return (
        <>
            <Image src={imgSrc} width={605} height={502} alt={'Harmony Domes'}/>
            <p className={styles.text}>*Harmony Domes will create the ideal space for you to live in harmony </p>
        </>
    );
}

export default ProductImage;