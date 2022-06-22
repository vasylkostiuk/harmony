import styles from "../ColorItem/ColorItem.module.css";
import {currentProductsVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import {useState} from "react";
import React from "react";

const ExtraFeature = ({name, img, featurePrice, isEnableInsideColor, featureId}) => {
    const [captured, setCaptured] = useState(false);

    const chooseFeature = () => {
        currentProductsVar({
            ...currentProductsVar(),
            calculatePrice: captured ? (currentProductsVar().calculatePrice - featurePrice) : (currentProductsVar().calculatePrice + featurePrice),
            enableInsideColorArr: !captured ? [...currentProductsVar().enableInsideColorArr, {id: featureId, enableColors: isEnableInsideColor}] : [...currentProductsVar().enableInsideColorArr.filter(item => item?.id !== featureId)],
            currentFeatures: !captured ? [...currentProductsVar().currentFeatures, name] : [...currentProductsVar().currentFeatures.filter(item => item !== name)]
        });
        setCaptured(!captured);
    }

    return (
        <div
            className={captured ? styles.item__captured : styles.item}
            onClick={() => chooseFeature()}
        >
            <div className={styles.color__container}>
                <img className={styles.color} src={img} height={40} width={40} alt={'Harmony Domes'}/>
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    );
}

export default React.memo(ExtraFeature);