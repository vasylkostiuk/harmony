import HubCalendar from "../../atoms/HubCalendar/HubCalendar";
import styles from './SelectDate.module.css';

const SelectDate = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>2.Select date</h3>
            <p className={styles.description}>You chose Build A Quote, a 45 minute In-Person Session for Free</p>
            <HubCalendar/>
            <div className={styles.button__container}>
                <p>time picker</p>
                <button className={styles.button}>
                    <p className={styles.button__text}>Confirm</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5.16L1 9.66667" stroke="white" strokeWidth="1.5"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SelectDate;