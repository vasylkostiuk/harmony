import styles from './Burger.module.css';
import {useState} from "react";
import {showCheckout, showHeaderDropdown} from "../../../../apolloClient/reactiveVariables/header";

const Burger = () => {
    const [open, setOped] = useState(false);

    return (
        <div className={styles.container} onClick={() => {
            setOped(!open);
            showCheckout(false);
            showHeaderDropdown(!showHeaderDropdown());
        }}>
            <span className={`${styles.item} ${open ? styles.opened : ''}`}></span>
            <span className={`${styles.item} ${open ? styles.opened : ''}`}></span>
            <span className={`${styles.item} ${open ? styles.opened : ''}`}></span>
        </div>
    );
}

export default Burger;