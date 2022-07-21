import styles from "../ContactFormInput/ContactFormInput.module.css";
import countryList from 'react-select-country-list';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {contactInfo, isInputsFullFilled} from "../../../../apolloClient/reactiveVariables/contactInfo";
import {searchCountries} from "../../../../services/searchCountries";
import {findEmptyField} from "../../../../services/contactValidation";
import {useReactiveVar} from "@apollo/client";

const CheckoutCountriesInput = ({type, placeholder, label, contactField, errorMessage = "Please, choose country"}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), []);
    const wrapperRef = useRef(null);
    const contacts = useReactiveVar(contactInfo);
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);
    const currentContact = contacts[`${contactField}`];
    const isFormFullFilled = useReactiveVar(isInputsFullFilled);

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

    const memoizedCountriesList = useCallback(
        () => {
            return searchCountries(options.map(c => c?.label),value)
        },
        [value],
    );

    useOutsideAlerter(wrapperRef);

    const style = {
        height: '160px',
        overflowY: 'scroll'
    }

    useEffect(() => {
        if (contactField === findEmptyField(contacts, contactField)) {
            setIsFieldEmpty(true);
        } else {
            setIsFieldEmpty(false);
        }
    }, [currentContact]);

    return (
        <form className={styles.form} style={{position: "relative"}} ref={wrapperRef}>
            <label htmlFor={placeholder} className={styles.label}>{label}</label>
            <input
                id={placeholder}
                type={type}
                className={`${styles.input} ${isFormFullFilled && isFieldEmpty ? styles.error : ''}`}
                placeholder={placeholder}
                value={value}
                onFocus={() => setShowDropdown(true)}
                onChange={() => {
                    contactInfo({...contactInfo({...contactInfo(), country: value})})
                }}
                onInput={(e) => setValue(e.target.value)}
            />
            {
                isFormFullFilled && isFieldEmpty
                    ?
                    <p className={styles.error__message}>{errorMessage}</p>
                    :
                    <></>
            }
            {
                showDropdown &&
                <div
                    className={styles.dropdown}
                    ref={wrapperRef}
                    style={memoizedCountriesList().length >= 5 ? style : {}}
                >
                    {   memoizedCountriesList().length
                        ?
                        memoizedCountriesList().map(country => {
                            return <p
                                className={styles.dropdown__item}
                                key={country}
                                onClick={() => {
                                    setValue(country)
                                    setShowDropdown(false)
                                    contactInfo({...contactInfo({...contactInfo(), country})})
                                }}
                            >
                                {country}
                            </p>
                        })
                        :
                        <div className={styles.dropdown__item}>No matches</div>
                    }
                </div>
            }
        </form>
    );
}

export default CheckoutCountriesInput;