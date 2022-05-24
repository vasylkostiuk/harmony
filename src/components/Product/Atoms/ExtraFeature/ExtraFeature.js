import styles from "../ColorItem/ColorItem.module.css";

const ExtraFeature = ({name, img}) => {
    return (
        <div className={styles.item}>
            <img className={styles.color} src={img} height={40} width={40} alt={'Harmony Domes'}/>
            <p className={styles.name}>{name}</p>
        </div>
    );
}

export default ExtraFeature;