import EnterDetails from "../../molecules/EnterDetails/EnterDetails";
import SelectDate from "../../molecules/SelectDate/SelectDate";
import styles from './SchedulePopup.module.css';
import {useReactiveVar} from "@apollo/client";
import {showSchedulePopup} from "../../../../apolloClient/reactiveVariables/hubContacts";

const SchedulePopup = () => {
    const display = useReactiveVar(showSchedulePopup);
    return (
        <>
            {
                display
                ?
                <div className={styles.popup__container}>
                    <div className="container">
                        <div className={styles.title__container}>
                            <h1 className={styles.title}>Book an appointment</h1>
                            <svg
                                style={{cursor: 'pointer'}}
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={() => showSchedulePopup(false)}
                            >
                                <path d="M2 18.9707L18.9706 2.00014" stroke="black" strokeWidth="3"/>
                                <path d="M18.9688 18.9707L1.99819 2.00014" stroke="black" strokeWidth="3"/>
                            </svg>
                        </div>
                        <p className={styles.description}>Please book a service and time with us below. We will notify you about your appointment by email, and payments will be processed externally.</p>
                        <div className={styles.schedule__container}>
                            <EnterDetails/>
                            <SelectDate/>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>
    );
}

export default SchedulePopup;