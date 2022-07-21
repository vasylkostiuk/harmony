import styles from '../Contact.module.css';
import ContactFormInput from "../../atoms/ContactFormInput/ContactFormInput";
import ContactFormLayout from "../../../../layouts/ContactFormLayout/ContactFormLayout";
import {validateEmail, validatePhoneNumber} from "../../../../services/contactValidation";

const ContactPersonal = () => {
    return (
        <>
            <h3 className={styles.title}>Contact</h3>
            <ContactFormLayout>
                <ContactFormInput
                    type={"text"}
                    placeholder={"Name"}
                    label={"First Name"}
                    contactField={"firstName"}
                />
                <ContactFormInput
                    type={"text"}
                    placeholder={"Second Name"}
                    label={"Second Name"}
                    contactField={"secondName"}
                />
                <ContactFormInput
                    type={"email"}
                    placeholder={"email@gmail.com"}
                    label={"E-mail"}
                    contactField={"email"}
                    validation={validateEmail}
                    errorMessage={"Fill this field or type actual email, please"}
                />
                <ContactFormInput
                    type={"tel"}
                    placeholder={"+1 999 999 9999"}
                    label={"Phone number"}
                    contactField={"phone"}
                    validation={validatePhoneNumber}
                    errorMessage={"Fill this field or type actual phone number, please"}
                />
            </ContactFormLayout>
        </>
    );
}

export default ContactPersonal;