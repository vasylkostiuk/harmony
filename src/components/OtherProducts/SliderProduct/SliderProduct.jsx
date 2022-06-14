import styles from './SliderProduct.module.css';
import Image from "next/image";
import customLoader from "../../../preRender/customLoader";
import Link from "next/link";

const SliderProduct = ({title, imageSrc, width, height, productId}) => {
    return (
        <Link href={`/product/${productId}`} passHref>
            <div className={styles.container}>
                <div className={styles.title__container}>
                    <p className={styles.title}>{title}</p>
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7.24L1 14" stroke="black" strokeWidth="2"/>
                    </svg>
                </div>
                <Image
                    src={imageSrc}
                    width={width}
                    height={height}
                    placeholder='blur'
                    blurDataURL={imageSrc}
                    alt='Harmony Domes'
                    loader={customLoader}
                />
            </div>
        </Link>
    );
}

export default SliderProduct;