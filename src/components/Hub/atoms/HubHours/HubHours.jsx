import styles from '../Contacts/Contacts.module.css';
import {getCurrentDay} from "../../../../services/getCurrentDay";
import {createWeek} from "../../../../services/hubHours";

const HubHours = ({visitHours}) => {
    return (
      <>
          <p className={styles.title}>Hub hours</p>
          {
              createWeek(visitHours).map((day, idx) => {
                  return <p
                      className={styles.contact__item}
                      key={day}
                      style={{
                          fontWeight: idx === getCurrentDay() ?  '700' : ''
                      }}
                  >
                      {day}
                  </p>
              })
          }
      </>
    );
}

export default HubHours;