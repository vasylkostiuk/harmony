import styles from '../Contact.module.css';
import ContactFormInput from "../../atoms/ContactFormInput/ContactFormInput";
import ContactFormLayout from "../../../../layouts/ContactFormLayout/ContactFormLayout";

const ContactPersonal = () => {
    return (
        <>
            <h3 className={styles.title}>Contact</h3>
            <ContactFormLayout>
                <ContactFormInput
                    type={"text"}
                    placeholder={"Name"}
                    label={"First Name"}
                />
                <ContactFormInput
                    type={"text"}
                    placeholder={"Second Name"}
                    label={"Second Name"}
                />
                <ContactFormInput
                    type={"email"}
                    placeholder={"email@gmail.com"}
                    label={"E-mail"}
                />
                <ContactFormInput
                    type={"tel"}
                    placeholder={"+1 999 999 9999"}
                    label={"Phone number"}
                />
            </ContactFormLayout>
        </>
    );
}

export default ContactPersonal;