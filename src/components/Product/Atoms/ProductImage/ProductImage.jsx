import Image from "next/image";
import styles from './ProductImage.module.css';
import {useReactiveVar} from "@apollo/client";
import {currentProductsVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import customLoader from "../../../../preRender/customLoader";
import {useState} from "react";
import LoadCircle from "../../../LoadCircle";

const ProductImage = ({imageDescription}) => {
    const {url, width, height} = useReactiveVar(currentProductsVar);
    const [showImage, setShowImage] = useState(false)

    return (
        <div style={{position: 'relative'}}>
            {
                !showImage &&
                <div style={{display: 'grid', placeItems: 'center', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}>
                    <LoadCircle padding={"30px"}/>
                </div>
            }
            <Image
                src={url}
                width={width}
                height={height}
                loading='lazy'
                onLoadingComplete={() => setShowImage(true)}
                alt={'Harmony Domes'}
                loader={customLoader}
            />
            {
                imageDescription
                ?
                    <p className={styles.text} dangerouslySetInnerHTML={{__html: imageDescription}}></p>
                :
                    <></>
            }
        </div>
    );
}

export default ProductImage;