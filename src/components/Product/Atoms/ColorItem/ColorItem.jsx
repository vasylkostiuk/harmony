import styles from './ColorItem.module.css';
import {configureColor} from "../../../../services/configureColor";
import {currentProductVar} from "../../../../apolloClient/reactiveVariables/currentProduct";

const ColorItem = ({colorName, color, colorImgUrl, colorImgWidth, colorImgHeight, colorPrice}) => {
    return (
        <div
            className={styles.item}
            onClick={() => currentProductVar({
                ...currentProductVar(),
                url: colorImgUrl,
                width: colorImgWidth,
                height: colorImgHeight,
                price: currentProductVar().initialPrice + colorPrice
            })}
        >
            <div className={styles.color__container}>
                <div className={styles.color} style={configureColor(color)}></div>
            </div>
            <p className={styles.name}>{colorName}</p>
        </div>
    );
}

export default ColorItem;