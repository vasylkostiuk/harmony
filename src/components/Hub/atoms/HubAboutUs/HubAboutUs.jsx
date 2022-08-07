import styles from './HubAboutUs.module.css';

const HubAboutUs = ({title, leftColumnText, rightColumnText}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.text__container}>
                <p className={styles.text} dangerouslySetInnerHTML={{__html: leftColumnText}}></p>
                <p className={styles.text} dangerouslySetInnerHTML={{__html: rightColumnText}}></p>
            </div>
        </div>
    );
}

export default HubAboutUs;