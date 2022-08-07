import styles from '/src/components/OtherProducts/SliderProduct/SliderProduct.module.css';
import Link from "next/link";

const SliderProduct = ({title, imageSrc, articleId}) => {
    return (
        <Link href={`/articles/${articleId}`} passHref>
            <div className={styles.container}>
                <div className={styles.title__container}>
                    <p className={styles.title}>{title}</p>
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7.24L1 14" stroke="black" strokeWidth="2"/>
                    </svg>
                </div>
                <img
                    src={imageSrc}
                    alt='Harmony Domes'
                    style={{
                        width: '100%',
                        height: '100%',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </Link>
    );
}

export default SliderProduct;