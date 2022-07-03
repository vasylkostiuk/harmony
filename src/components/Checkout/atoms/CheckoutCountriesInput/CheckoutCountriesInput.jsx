import styles from "../ContactFormInput/ContactFormInput.module.css";
import countryList from 'react-select-country-list';
import {useEffect, useMemo, useRef, useState} from "react";

const CheckoutCountriesInput = ({type, placeholder, label}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), []);
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
        <form className={styles.form} style={{position: "relative"}} ref={wrapperRef}>
            <label htmlFor={placeholder} className={styles.label}>{label}</label>
            <input
                id={placeholder}
                type={type}
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onFocus={() => setShowDropdown(true)}
                onChange={(e) => setValue(e.target.value)}
            />
            {
                showDropdown &&
                <div className={styles.dropdown} ref={wrapperRef}>
                    {
                        options.map(c => {
                            return <p
                                className={styles.dropdown__item}
                                key={c?.value}
                                onClick={() => {
                                    setValue(c?.label)
                                    setShowDropdown(false)
                                }}
                            >
                                {c?.label}
                            </p>
                        })
                    }
                </div>
            }
        </form>
    );
}

export default CheckoutCountriesInput;