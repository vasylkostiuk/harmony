import styles from '../Contact.module.css';
import ContactFormInput from "../../atoms/ContactFormInput/ContactFormInput";
import ContactFormLayout from "../../../global/LoadCircle/layouts/ContactFormLayout/ContactFormLayout";
import CheckoutCountriesInput from "../../atoms/CheckoutCountriesInput/CheckoutCountriesInput";

const ContactAddress = () => {
    return (
        <>
            <h3 className={styles.title}>Address information</h3>
            <ContactFormLayout>
                <ContactFormInput
                    type={"text"}
                    placeholder={"Address"}
                    label={"Address"}
                    contactField={"address"}
                />
                <ContactFormInput
                    type={"text"}
                    placeholder={"Apartment, suit, etc."}
                    label={"Apartment, suit, etc."}
                    contactField={"apartment"}
                />
                <ContactFormInput
                    type={"text"}
                    placeholder={"City"}
                    label={"City"}
                    contactField={"city"}
                />
                <ContactFormInput
                    type={"text"}
                    placeholder={"State/province"}
                    label={"State/province"}
                    contactField={"state"}
                />
                <CheckoutCountriesInput
                    type={"text"}
                    placeholder={"Country"}
                    label={"Country"}
                    contactField={"country"}
                />
                <ContactFormInput
                    type={"text"}
                    placeholder={"00000"}
                    label={"ZIP/postal code"}
                    contactField={"zipCode"}
                />
            </ContactFormLayout>
            <div style={{height: '200px'}}></div>
        </>
    );
}

export default ContactAddress;