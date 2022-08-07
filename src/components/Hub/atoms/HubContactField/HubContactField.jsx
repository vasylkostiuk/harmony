import {useReactiveVar} from "@apollo/client";
import {hubContacts, isHubInputsFullFilled} from "../../../../apolloClient/reactiveVariables/hubContacts";
import {findEmptyField} from "../../../../services/contactValidation";
import styles from "../../../Checkout/atoms/ContactFormInput/ContactFormInput.module.css";
import {useEffect, useState} from "react";

const ContactFormInput = ({type, placeholder, label, contactField, validation = null, errorMessage = "Fill this field, please"}) => {
    const contacts = useReactiveVar(hubContacts);
    const currentContact = contacts[`${contactField}`];
    const isFormFullFilled = useReactiveVar(isHubInputsFullFilled);
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
                onChange={(e) => hubContacts(
                    {
                        ...hubContacts(),
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