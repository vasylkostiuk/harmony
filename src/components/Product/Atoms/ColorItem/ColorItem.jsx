import styles from './ColorItem.module.css';
import {configureColor} from "../../../../services/configureColor";
import {currentProductVar} from "../../../../apolloClient/reactiveVariables/currentProduct";

const ColorItem = ({colorName, color, colorImgUrl, colorImgWidth, colorImgHeight}) => {
    return (
        <div
            className={styles.item}
            onClick={() => currentProductVar({
                url: colorImgUrl,
                width: colorImgWidth,
                height: colorImgHeight
            })}
        >
            <div className={styles.color} style={configureColor(color)}></div>
            <p className={styles.name}>{colorName}</p>
        </div>
    );
}

export default ColorItem;