import HubCalendar from "../../atoms/HubCalendar/HubCalendar";
import styles from './SelectDate.module.css';
import TimePicker from "../TimePicker/TimePicker";
import {useReactiveVar} from "@apollo/client";
import {hubContacts, isHubInputsFullFilled} from "../../../../apolloClient/reactiveVariables/hubContacts";
import {init, send} from "@emailjs/browser";
import {createHubLetter} from "../../../../services/createProductMail";
import {isContactFullFilled} from "../../../../services/contactValidation";
import SuccessPopup from "../../../global/SuccessPopup/SuccessPopup";
import {useState} from "react";

const SelectDate = ({weekObj}) => {
    const contacts = useReactiveVar(hubContacts);
    const [showPopup, setShowPopup] = useState(false);

    init("F8o0joNoID8s9-JWd");
    const serviceID = 'service_isfvdvd';
    const templateID = 'template_s5c2tnc';

    const sendData = {
        appointment: createHubLetter(contacts)
    }

    const sendEmail = () => {
        if (isContactFullFilled(contacts)) {
            isHubInputsFullFilled(false);
            send(serviceID, templateID, sendData)
                .then(() => {
                    setShowPopup(true)
                });
        } else {
            isHubInputsFullFilled(true);
        }
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>2.Select date</h3>
            <p className={styles.description}>You chose Build A Quote, a 45 minute In-Person Session for Free</p>
            <HubCalendar/>
            <div className={styles.button__container}>
                <TimePicker weekObj={contacts?.day !== '' ? weekObj[contacts?.day] : weekObj[0]}/>
                <button className={styles.button} onClick={() => sendEmail()}>
                    <p className={styles.button__text}>Confirm</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5.16L1 9.66667" stroke="white" strokeWidth="1.5"/>
                    </svg>
                </button>
            </div>
            {
                showPopup
                ?
                    <SuccessPopup/>
                :
                    <></>
            }
        </div>
    );
}

export default SelectDate;