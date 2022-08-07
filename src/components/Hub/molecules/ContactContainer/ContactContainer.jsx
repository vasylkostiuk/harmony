import styles from './ContactContainer.module.css';
import Contacts from "../../atoms/Contacts/Contacts";
import HubHours from "../../atoms/HubHours/HubHours";

const ContactContainer = ({contactInfo}) => {
    return (
      <div className={styles.container}>
          <div className={styles.contacts}>
              <Contacts phoneNumber={contactInfo?.tel} address={contactInfo?.adress} email={contactInfo?.email}/>
          </div>
          <div className={styles.hours}>
              <HubHours/>
          </div>
          <div className={styles.map}></div>
      </div>
    );
}

export default ContactContainer;