import styles from './SequenceAdvantageItem.module.css';

const SequenceAdvantageItem = ({advantage}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img className={styles.image} src={advantage?.image?.url} alt="Harmony Domes"/>
            </div>
            <div>
                <p className={styles.title}>{advantage?.title}</p>
                <p className={styles.description}>{advantage?.description}</p>
            </div>
        </div>
    );
}

export default SequenceAdvantageItem;