import styles from './HubBlock.module.css';
import Link from "next/link";
import HubSlider from "../../../Hub/atoms/HubSlider/HubSlider";

const HubBlock = ({hubBlock}) => {
    const {
        preTitle,
        title,
        description,
        buttonText,
        buttonLink,
        sliderImages
    } = hubBlock;

    return (
        <div className="container">
            <div className={styles.container}>
                <div className={styles.info__container}>
                    <div className={styles.title__container}>
                        <p className={styles.pretitle}>{preTitle}</p>
                        <h3 className={styles.title}>{title}</h3>
                    </div>
                    <div>
                        <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}></p>
                        <Link href={buttonLink} passHref>
                            <div className={styles.button}>{buttonText}</div>
                        </Link>
                    </div>
                </div>
            </div>
            <HubSlider images={sliderImages}/>
        </div>
    );
}

export default HubBlock;