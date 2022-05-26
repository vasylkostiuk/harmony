import styles from "../ColorItem/ColorItem.module.css";
import {currentProductVar} from "../../../../apolloClient/reactiveVariables/currentProduct";
import {useState} from "react";

const ExtraFeature = ({name, img, featurePrice}) => {
    const [captured, setCaptured] = useState(false);

    const chooseFeature = () => {
        currentProductVar({
            ...currentProductVar(),
            calculatePrice: captured ? (currentProductVar().calculatePrice - featurePrice) : (currentProductVar().calculatePrice + featurePrice),
        });
        setCaptured(!captured);
    }

    return (
        <div
            className={styles.item}
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