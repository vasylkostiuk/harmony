import styles from '../DropdownColor.module.css';
import ColorItem from "../../../Product/Atoms/ColorItem/ColorItem";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {changeExternalColor} from "../../../../services/changeCheckoutObj";

const DropdownColor = ({colors, currentColor, productId, initialPrice}) => {

    return (
        <div
            className={`${styles.dropdown} ${styles.dropdown__left}`}
        >
            <p className={styles.title}>Choose external color:</p>
            <div className={styles.dropdown__grid}>
                {
                    colors.map(c => {
                        return (
                            <div
                                key={c?.id}
                                onClick={() => {
                                    return checkoutProducts([...changeExternalColor(checkoutProducts(), productId, c?.color?.hex, c?.title, c?.price, initialPrice)])
                                }}
                            >
                                <ColorItem  color={c?.color?.hex} colorName={c?.title} isColorCurrent={c?.color?.hex === currentColor}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default DropdownColor;