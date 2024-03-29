import styles from './Contacts.module.css';
import SchedulePopup from "../../organisms/SchedulePopup/SchedulePopup";
import {showSchedulePopup} from "../../../../apolloClient/reactiveVariables/hubContacts";

const Contacts = ({phoneNumber, email, address, weekObj}) => {
    return (
        <>
            <h3 className={styles.title}>Contact info</h3>
            <a href={`tel:${phoneNumber}`} className={styles.contact__item} style={{cursor: 'pointer'}}>{phoneNumber}</a>
            <a href={`mailto:${email}`} className={styles.contact__item} style={{cursor: 'pointer'}}>{email}</a>
            <p className={styles.contact__item}>{address}</p>
            <button className={styles.btn} onClick={() => showSchedulePopup(true)}>
                <div className={styles.btn__inside_container}>
                    <p className={styles.btn__inside_text}>Schedule now</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1L5.5 5.16L1.5 9.66667" stroke="#18181B" strokeWidth="1.5"/>
                    </svg>
                </div>
            </button>
            <SchedulePopup weekObj={weekObj}/>
        </>
    );
}

export default Contacts;