import styles from './ContactUsInput.module.css';
import {useReactiveVar} from "@apollo/client";
import {contactUsEmail} from "../../../../apolloClient/reactiveVariables/contactUs";
import {contactInfo} from "../../../../apolloClient/reactiveVariables/contactInfo";
import {validateEmail} from "../../../../services/contactValidation";

const ContactUsInput = () => {
    const contactEmail = useReactiveVar(contactUsEmail);

    return (
        <div className={styles.container}>
            <input
                type="email"
                className={styles.input}
                placeholder={"email@gmail.com"}
                onChange={(e) => contactInfo(validateEmail(e.target.value))}
            />
            <button
                className={styles.button}
                onClick={() => {
                    if (contactEmail) {
                        // place for email logic
                        return;
                    }
                }}
            >
                <p className={styles.button__text}>Contact</p>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.08008 0.692383L5.08008 5.17238L1.08008 10.0257" stroke="white" strokeWidth="1.5"/>
                </svg>
            </button>
        </div>
    );
}

export default ContactUsInput;