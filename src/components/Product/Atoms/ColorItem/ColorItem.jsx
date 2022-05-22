import styles from './ColorItem.module.css';
import {configureColor} from "../../../../services/configureColor";

const ColorItem = ({colorName, color}) => {
    return (
        <div className={styles.item}>
            <div className={styles.color} style={configureColor(color)}></div>
            <p className={styles.name}>{colorName}</p>
        </div>
    );
}

export default ColorItem;