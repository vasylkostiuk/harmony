import LayoutBadge from "./Atoms/LayoutBadge/LayoutBadge";
import styles from "./LayoutProduct.module.css";
import Image from "next/image";
import Link from 'next/link';
import customLoader from "../../preRender/customLoader";

const LayoutProduct = ({image, badge, title, description, previousPrice, currentPrice, productId}) => {
    return (
        <Link href={`/product/${productId}`} passHref>
            <div style={{cursor: 'pointer'}}>
                <div className={styles.image__container}>
                    <Image
                        src={image?.url}
                        width={image?.width}
                        height={image?.height}
                        alt="Harmony Domes"
                        loader={customLoader}
                        placeholder='blur'
                        blurDataURL={image?.url}
                    />
                    <LayoutBadge text={badge}/>
                </div>
                <div className={styles.info__container}>

                    <div className={styles.title__container}>
                        <p className={styles.title__text}>{title}</p>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7.24L1 14" stroke="black" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={styles.price__container}>
                        {
                            previousPrice
                            ?
                                <p className={styles.price__previous}>$ {previousPrice}</p>
                            :
                                <></>
                        }
                        <p className={styles.price__current}>$ {currentPrice}</p>
                    </div>
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>
    );
}

export default LayoutProduct;