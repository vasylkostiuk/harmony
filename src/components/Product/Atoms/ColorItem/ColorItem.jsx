import styles from './ColorItem.module.css';
import {configureColor} from "../../../../services/configureColor";

const ColorItem = ({colorName, color, isColorCurrent}) => {
    return (
        <div
            className={isColorCurrent ? styles.item__captured : styles.item}
        >
            <div className={styles.color__container}>
                <div className={styles.color} style={configureColor(color)}></div>
            </div>
            <p className={styles.name}>{colorName}</p>
        </div>
    );
}

export default ColorItem;