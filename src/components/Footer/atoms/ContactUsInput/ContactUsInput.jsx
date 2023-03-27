import styles from './ContactUsInput.module.css';
import {useReactiveVar} from "@apollo/client";
import {contactUsEmail, isContactUsEmailFullFilled, contactUsFirstName, contactUsLastName, contactUsComment} from "../../../../apolloClient/reactiveVariables/contactUs";
import {validateEmail} from "../../../../services/contactValidation";
import {init, send} from "@emailjs/browser";
import ErrorBanner from "../../../global/ErrorBanner/ErrorBanner";
import {useState} from "react";

const ContactUsInput = () => {
    const contactEmail = useReactiveVar(contactUsEmail);
    const contactFirstName = useReactiveVar(contactUsFirstName);
    const contactLastName = useReactiveVar(contactUsLastName);
    const contactComment = useReactiveVar(contactUsComment);
    const isFormFullFilled = useReactiveVar(isContactUsEmailFullFilled);
    const [showBanner, setShowBanner] = useState(false);
    const [isEmailPositive, setIsEmailPositive] = useState(true);

    const getNotificationData = (isPositive) => {
        if (isPositive) {
            return {
                title: "Success",
                description: "We'll contact you soon. Check your email box, please.",
                isPositive: true,
            }
        }

        return {
            title: "Error",
            description: "Error of email sending. Please, try again later.",
            isPositive: false,
        }
    }
    
    const setResponseState = (isPositive) => {
        setIsEmailPositive(isPositive);
        setShowBanner(!showBanner);
        contactUsEmail('');
        contactUsFirstName('');
        contactUsLastName('');
        contactUsComment('');
        document.getElementById('footerContactFormEmailInput').value = '';
    }

    init(process.env.NEXT_PUBLIC_EMAIL_API_KEY);
    const serviceID = process.env.NEXT_PUBLIC_EMAIL_PRODUCT_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAIL_BOOK_TEMPLATE_ID;

    const sendData = {
        subject: 'New contact request (From footer)',
        appointment: createContactMail(contactEmail, contactFirstName, contactLastName, contactComment)
    }

    function createContactMail(contactEmail, contactFirstName, contactLastName, contactComment) {
        return `
        <br/>
        <br/>
        <b>Contact</b>
        <br/>
        <p>First name: ${contactFirstName}</p>
        <p>Last name: ${contactLastName}</p>
        <p>Email: ${contactEmail}</p>
        <p>Comment</p>
        <br/>
        <p>${contactComment}</p>
    `
    }

    const sendEmail = () => {
        if (contactEmail && contactFirstName && contactLastName && contactComment) {
            isContactUsEmailFullFilled(false);
            setResponseState(true);
            send(serviceID, templateID, sendData)
                .then(() => {
                    setResponseState(true);
                })
                .catch(() => {
                    setResponseState(false);
                });
        } else {
            isContactUsEmailFullFilled(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <input
                    type="text"
                    className={`${styles.input} ${styles.firstName} ${isFormFullFilled && !contactFirstName ? styles.error : ''}`}
                    placeholder={"First Name"}
                    value={contactUsFirstName()}
                    onChange={(e) => contactUsFirstName(e.target.value)}
                />
                <input
                    type="text"
                    className={`${styles.input} ${styles.lastName} ${isFormFullFilled && !contactLastName ? styles.error : ''} `}
                    placeholder={"Last Name"}
                    value={contactUsLastName()}
                    onChange={(e) => contactUsLastName(e.target.value)}
                />
            </div>
            <div className={styles.container}>
                <input
                    id="footerContactFormEmailInput"
                    type="email"
                    className={`${styles.input} ${isFormFullFilled && !contactEmail ? styles.error : ''}`}
                    placeholder={"email@gmail.com"}
                    onChange={(e) => contactUsEmail(validateEmail(e.target.value))}
                />
            </div>
            <div className={styles.container}>
                <textarea rows={3}
                className={`${styles.textarea} ${isFormFullFilled && !contactComment ? styles.error : ''}`}
                placeholder={"Your message"} value={contactUsComment()}
                onChange={(e) => contactUsComment(e.target.value)}
                ></textarea>
            </div>
            <div className={styles.container}>
                <div
                    className={styles.button}
                    onClick={() => sendEmail()}
                >
                    <p className={styles.button__text}>Contact</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.08008 0.692383L5.08008 5.17238L1.08008 10.0257" stroke="white" strokeWidth="1.5"/>
                    </svg>
                </div>
            </div>
            <ErrorBanner
                isDisplayed={showBanner}
                {...getNotificationData(isEmailPositive)}
            />
        </>
    );
}

export default ContactUsInput;