import styles from './CheckoutColor.module.css';
import {configureColor} from "../../../../services/configureColor";

const CheckoutColor = ({color, text}) => {
    return (
        <div className={styles.container}>
            <div className={styles.color} style={configureColor(color)}></div>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default CheckoutColor;