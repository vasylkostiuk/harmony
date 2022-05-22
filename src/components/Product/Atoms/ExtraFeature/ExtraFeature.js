import styles from "../ColorItem/ColorItem.module.css";
import Image from "next/image";

const ExtraFeature = ({name, img}) => {
    return (
        <div className={styles.item}>
            <Image className={styles.color} src={img} layout={'fill'} alt={'Harmony Domes'}/>
            <p className={styles.name}>{name}</p>
        </div>
    );
}

export default ExtraFeature;