import styles from "../ColorItem/ColorItem.module.css";
import {useReactiveVar} from "@apollo/client";
import {currentProductsVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import {configureInsideColor, isEnableInsideColors} from "../../../../services/insideColors";
import React, {useEffect, useState} from "react";


const InsideColor = ({color, colorName, price}) => {
    const [captured, setCaptured] = useState(false);
    const {enableInsideColorArr, currentInternalColor} = useReactiveVar(currentProductsVar);

    const isColorCurrent = currentInternalColor === colorName;

    const isColorsEnabled = isEnableInsideColors(enableInsideColorArr.map(item => item.enableColors));

    function chooseInternalColor() {
        if (isColorsEnabled) {
            currentProductsVar({
                ...currentProductsVar(),
                internalColorPrice: !isColorCurrent ? price : 0,
                currentInternalColor: !isColorCurrent ? colorName: ''
            });
            setCaptured(!captured);
        }
    }

    useEffect(() => {
        if (!isColorsEnabled) {
            currentProductsVar({
                ...currentProductsVar(),
                internalColorPrice: 0,
                currentInternalColor: ''
            })
        }
    }, [isColorsEnabled])

    return (
        <div
            className={isColorCurrent ? styles.item__captured : styles.item}
            onClick={() => chooseInternalColor()}
        >
            <div className={styles.color__container}>
                <div className={styles.color} style={configureInsideColor(isColorsEnabled, color)}></div>
            </div>
            <p className={`${styles.name} ${!isColorsEnabled ? styles.name__disabled : ''}`}>{colorName}</p>
        </div>
    );
}

export default React.memo(InsideColor);