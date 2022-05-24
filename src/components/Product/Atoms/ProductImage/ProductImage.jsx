import Image from "next/image";
import styles from './ProductImage.module.css';

const ProductImage = ({imgSrc, width, height}) => {
    return (
        <>
            <Image src={imgSrc} width={width} height={height} alt={'Harmony Domes'}/>
            <p className={styles.text}>*Harmony Domes will create the ideal space for you to live in harmony</p>
        </>
    );
}

export default ProductImage;