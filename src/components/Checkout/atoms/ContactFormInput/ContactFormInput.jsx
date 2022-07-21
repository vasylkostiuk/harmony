import styles from './ContactFormInput.module.css';
import {contactInfo, isInputsFullFilled} from "../../../../apolloClient/reactiveVariables/contactInfo";
import {useReactiveVar} from "@apollo/client";
import {useEffect, useState} from "react";
import {findEmptyField} from "../../../../services/contactValidation";

const ContactFormInput = ({type, placeholder, label, contactField, validation = null, errorMessage = "Fill this field, please"}) => {
    const contacts = useReactiveVar(contactInfo);
    const currentContact = contacts[`${contactField}`];
    const isFormFullFilled = useReactiveVar(isInputsFullFilled);
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);

    useEffect(() => {
        if (contactField === findEmptyField(contacts, contactField)) {
            setIsFieldEmpty(true);
        } else {
            setIsFieldEmpty(false);
        }
    }, [currentContact]);


    return (
        <form className={styles.form}>
            <label htmlFor={placeholder} className={styles.label}>{label}</label>
            <input
                id={placeholder}
                type={type}
                className={`${styles.input} ${isFormFullFilled && isFieldEmpty ? styles.error : ''}`}
                placeholder={placeholder}
                onChange={(e) => contactInfo(
                    {
                        ...contactInfo(),
                        [contactField]: validation ? validation(e.target.value) : e.target.value
                    }
                )}
            />
            {
                isFormFullFilled && isFieldEmpty
                ?
                <p className={styles.error__message}>{errorMessage}</p>
                :
                <></>
            }
        </form>
    );
}

export default ContactFormInput;