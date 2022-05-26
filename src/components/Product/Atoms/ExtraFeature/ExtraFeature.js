import styles from "../ColorItem/ColorItem.module.css";

const ExtraFeature = ({name, img}) => {
    return (
        <div className={styles.item}>
            <div className={styles.color__container}>
                <img className={styles.color} src={img} height={40} width={40} alt={'Harmony Domes'}/>
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    );
}

export default ExtraFeature;