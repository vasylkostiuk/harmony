import styles from "../ColorItem/ColorItem.module.css";
import {currentProductsVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import {useState} from "react";

const ExtraFeature = ({name, img, featurePrice}) => {
    const [captured, setCaptured] = useState(false);

    const chooseFeature = () => {
        currentProductsVar({
            ...currentProductsVar(),
            calculatePrice: captured ? (currentProductsVar().calculatePrice - featurePrice) : (currentProductsVar().calculatePrice + featurePrice),
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

export default ExtraFeature;