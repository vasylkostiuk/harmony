import styles from './LaptopGifBlock.module.css';
import Link from "next/link";

const LaptopGifBlock = ({laptopGifBlock}) => {
    const {
        title,
        subTitle,
        laptopBackground,
        laptopGif,
        advantages,
        buttonLink,
        buttonText
    } = laptopGifBlock;

    return (
        <div className="container">
            <div className={styles.container}>
                <div className={styles.title__container}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.subtitle}>{subTitle}</p>
                </div>
                <div className={styles.gif__container}>
                    <img
                        src={laptopBackground?.url}
                        alt="Harmony Domes"
                        className={`${styles.gif__image}`}
                    />
                    <img
                        src={laptopGif?.url}
                        alt="Harmony Domes"
                        className={`${styles.gif__image} ${styles.gif__inside}`}
                    />
                </div>
                <div className={styles.items__container}>
                    {
                        advantages?.length
                            ?
                            advantages.map((item, idx) => {
                                return <div key={idx}
                                            className={`${styles.item__wrapper} ${styles.item__left} ${idx > 3 ? styles.item__right : ''}`}
                                >
                                    <div className={styles.item__circle}></div>
                                    <p className={styles.item__text}>{item}</p>
                                </div>
                            })
                            :
                            <></>
                    }
                    <Link href={buttonLink} passHref>
                        <div className={styles.item__button}>{buttonText}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LaptopGifBlock;