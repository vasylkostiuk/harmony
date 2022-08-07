import styles from '../Contacts/Contacts.module.css';
import {getCurrentDay} from "../../../../services/getCurrentDay";

const week = ['Sunday 11:00 a.m. - 6:00 p.m.', 'Monday 10:00 a.m. - 6:00 p.m.', 'Tuesday 10:00 a.m. - 6:00 p.m.', 'Wednesday 10:00 a.m. - 6:00 p.m.', 'Thursday 10:00 a.m. - 6:00 p.m.', 'Friday 10:00 a.m. - 6:00 p.m.', 'Saturday 10:00 a.m. - 6:00 p.m.']

const HubHours = () => {
    return (
      <>
          <p className={styles.title}>Hub hours</p>
          {
              week.map((day, idx) => {
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