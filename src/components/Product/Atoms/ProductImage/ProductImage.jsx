import Image from "next/image";
import styles from './ProductImage.module.css';
import {useReactiveVar} from "@apollo/client";
import {currentProductVar} from "../../../../apolloClient/reactiveVariables/currentProduct";

const ProductImage = () => {
    const {url, width, height} = useReactiveVar(currentProductVar);
    return (
        <>
            <Image
                src={url}
                width={width}
                height={height}
                alt={'Harmony Domes'}
                loading='lazy'
            />
            <p className={styles.text}>*Harmony Domes will create the ideal space for you to live in harmony</p>
        </>
    );
}

export default ProductImage;