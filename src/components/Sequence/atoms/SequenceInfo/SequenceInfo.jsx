import styles from './SequenceInfo.module.css';

const SequenceInfo = ({sequenceInfo}) => {
    const {
        title,
        firstText,
        firstImage,
        secondText,
        secondImage,
        thirdText,
        thirdImage
    } = sequenceInfo;

    return (
        <div className="container">
            <div className={styles.container}>
                <div className={styles.first}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={`${styles.text} ${styles.text__first}`} dangerouslySetInnerHTML={{__html: firstText}}></p>
                    <img className={`${styles.image} ${styles.image__first}`} src={`${firstImage?.url}?resize=width:${firstImage?.width},fit:crop/quality=value:75/output=format:webp/compress`} alt="Harmony Domes"/>
                </div>
                <div className={styles.second}>
                    <p className={`${styles.text} ${styles.text__second}`} dangerouslySetInnerHTML={{__html: secondText}}></p>
                    <img className={`${styles.image} ${styles.image__second}`} src={`${secondImage?.url}?resize=width:${secondImage?.width},fit:crop/quality=value:75/output=format:webp/compress`} alt="Harmony Domes"/>
                </div>
                <div className={styles.third}>
                    <p className={`${styles.text} ${styles.text__third}`} dangerouslySetInnerHTML={{__html: thirdText}}></p>
                    <img className={`${styles.image} ${styles.image__third}`} src={`${thirdImage?.url}?resize=width:${thirdImage?.width},fit:crop/quality=value:75/output=format:webp/compress`} alt="Harmony Domes"/>
                </div>
            </div>
        </div>
    );
}

export default SequenceInfo;