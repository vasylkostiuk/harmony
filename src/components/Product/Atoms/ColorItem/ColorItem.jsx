import styles from './ColorItem.module.css';
import {currentProductVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import {useReactiveVar} from "@apollo/client";
import {configureColor} from "../../../../services/configureColor";

const ColorItem = ({colorName, color, colorImgUrl, colorImgWidth, colorImgHeight, colorPrice}) => {
    const {currentColor} = useReactiveVar(currentProductVar);
    const isColorCurrent = currentColor === colorName;
    return (
        <div
            className={isColorCurrent ? styles.item__captured : styles.item}
            onClick={() => currentProductVar({
                ...currentProductVar(),
                url: colorImgUrl,
                width: colorImgWidth,
                height: colorImgHeight,
                price: currentProductVar().initialPrice + colorPrice,
                currentColor: colorName
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