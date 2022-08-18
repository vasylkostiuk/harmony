import styles from './TimePicker.module.css';
import dropDownStyles from '../../../LayoutProduct/Molecules/FiltersDropdownContainer/FilterDropdownContainer.module.css';
import dropDownItemStyles from '../../../LayoutProduct/Atoms/FilterItem/FilterDropdown.module.css';
import {useReactiveVar} from "@apollo/client";
import {hubContacts} from "../../../../apolloClient/reactiveVariables/hubContacts";
import {useEffect, useRef, useState} from "react";

const TimePicker = ({weekObj}) => {
    const {time} = useReactiveVar(hubContacts);
    const [showDropdown, setShowDropdown] = useState(false);
    const wrapperRef = useRef(null);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowDropdown(false);
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
        <div className={styles.container} onClick={() => setShowDropdown(!showDropdown)} ref={wrapperRef}>
            <p className={styles.text}>{time}</p>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.664062 1.33203L4.82406 5.33203L9.33073 1.33203" stroke="#A1A1AA" strokeWidth="1.5"/>
            </svg>
            {
                showDropdown
                ?
                    <div className={`${dropDownStyles.dropdown__container} ${dropDownStyles.time__picker}`}>
                        {
                            weekObj?.intervals.flat().map((interval, idx) => {
                                return <li
                                    className={`${dropDownItemStyles.item}`}
                                    key={idx}
                                    onClick={() => hubContacts({
                                        ...hubContacts(),
                                        time: interval
                                    })}
                                >
                                    {interval}
                                </li>
                            })
                        }
                    </div>
                :
                    <></>
            }
        </div>
    );
}

export default TimePicker;