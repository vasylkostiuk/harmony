import styles from './HeaderBody.module.css';
import {useReactiveVar} from "@apollo/client";
import {showHeaderDropdown} from "../../../apolloClient/reactiveVariables/header";

const HeaderBody = ({children}) => {
    const isOpened = useReactiveVar(showHeaderDropdown);

    return (
        <div className={`${styles.container} ${isOpened ? styles.opened : ''}`}>
            {children}
        </div>
    );
}

export default HeaderBody;