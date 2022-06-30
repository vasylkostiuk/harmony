import styles from "../DropdownColor.module.css";
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {changeInternalColor} from "../../../../services/changeCheckoutObj";
import ColorItem from "../../../Product/Atoms/ColorItem/ColorItem";

const DropdownInternal = ({colors, currentColor, productId}) => {
    return (
        <div
            className={`${styles.dropdown} ${styles.dropdown__right}`}
        >
            <p className={styles.title}>Choose internal color:</p>
            <div className={styles.dropdown__grid}>
                {
                    colors.map(c => {
                        return (
                            <div
                                key={c?.id}
                                onClick={() => {
                                    return checkoutProducts([...changeInternalColor(checkoutProducts(), productId, c?.color?.hex, c?.title, c?.price)])
                                }}
                            >
                                <ColorItem color={c?.color?.hex} colorName={c?.title} isColorCurrent={c?.color?.hex === currentColor}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default DropdownInternal;