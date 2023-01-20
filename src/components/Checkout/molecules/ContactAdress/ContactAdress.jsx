import styles from '../Contact.module.css';
import ContactFormInput from "../../atoms/ContactFormInput/ContactFormInput";
import ContactFormLayout from "../../../global/LoadCircle/layouts/ContactFormLayout/ContactFormLayout";
import CheckoutCountriesInput from "../../atoms/CheckoutCountriesInput/CheckoutCountriesInput";
import Link from "next/link";
import {useState} from "react";
import {isInputsFullFilled, policyChecked} from "../../../../apolloClient/reactiveVariables/contactInfo";
import {useReactiveVar} from "@apollo/client";

const ContactAddress = () => {
    const [checked, setChecked] = useState(false);
    const isFormFullFilled = useReactiveVar(isInputsFullFilled)

    const handleCheckbox = () => {
        policyChecked(!checked);
        setChecked(!checked);
    }

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
            <div className={styles.policy}>
                <input type="checkbox" checked={checked} className={styles.checkbox}/>
                <div
                    className={`${styles.pseudo__checkbox} ${checked ? styles.checked : ''} ${isFormFullFilled && !checked ? styles.error : ''}`}
                    onClick={handleCheckbox}
                >
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6663 1.5L4.24967 7.91667L1.33301 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
                <p>I accept
                    <Link href={'/articles/clck2z78jjqfw0ajx1hft4zg0'} passhref>
                        <span> <u style={{cursor: 'pointer'}}>policy and privacy</u></span>
                    </Link>
                </p>
            </div>
        </>
    );
}

export default ContactAddress;