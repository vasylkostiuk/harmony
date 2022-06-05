import Image from "next/image";
import styles from './ProductImage.module.css';
import {useReactiveVar} from "@apollo/client";
import {currentProductsVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import customLoader from "../../../../preRender/customLoader";

const ProductImage = () => {
    const {url, width, height} = useReactiveVar(currentProductsVar);

    return (
        <>
            <Image
                src={url}
                width={width}
                height={height}
                loading='lazy'
                alt={'Harmony Domes'}
                loader={customLoader}
            />
            <p className={styles.text}>*Harmony Domes will create the ideal space for you to live in harmony</p>
        </>
    );
}

export default ProductImage;