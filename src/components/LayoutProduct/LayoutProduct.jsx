import LayoutBadge from "./Atoms/LayoutBadge/LayoutBadge";
import styles from "./LayoutProduct.module.css";
import Image from "next/image";

const LayoutProduct = ({image}) => {
    return (
        <div>
            <div className={styles.image__container}>
                <Image
                    src={image?.url}
                    width={image?.width}
                    height={image?.height}
                    alt="Harmony Domes"
                />
                <LayoutBadge text={'badge'}/>
            </div>
            <div className={styles.info__container}>
                <div className={styles.title__container}>
                    <p className={styles.title__text}>title</p>
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7.24L1 14" stroke="black" strokeWidth="2"/>
                    </svg>
                </div>
                <div className={styles.price__container}>
                    <p className={styles.price__previous}>previous</p>
                    <p className={styles.price__current}>price</p>
                </div>
            </div>
            <p className={styles.description}>description</p>
        </div>
    );
}

export default LayoutProduct;