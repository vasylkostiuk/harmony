import styles from './HeaderBody.module.css';
import {useReactiveVar} from "@apollo/client";
import {showHeaderDropdown} from "../../../apolloClient/reactiveVariables/header";
import {useEffect, useRef} from "react";

const HeaderBody = ({children}) => {
    const isOpened = useReactiveVar(showHeaderDropdown);
    const wrapperRef = useRef(null);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    showHeaderDropdown(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef);

    return (
        <div className={`${styles.container} ${isOpened ? styles.opened : ''}`} ref={wrapperRef}>
            {children}
        </div>
    );
}

export default HeaderBody;