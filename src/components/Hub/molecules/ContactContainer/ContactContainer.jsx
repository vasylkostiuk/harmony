import styles from './ContactContainer.module.css';
import Contacts from "../../atoms/Contacts/Contacts";
import HubHours from "../../atoms/HubHours/HubHours";
import {createTimeIntervals} from "../../../../services/hubHours";
import Map from "../../../global/Map/Map";

const ContactContainer = ({contactInfo, visitHours, map}) => {
    return (
      <div className={styles.container}>
          <div className={styles.contacts}>
              <Contacts
                  phoneNumber={contactInfo?.tel}
                  address={contactInfo?.adress}
                  email={contactInfo?.email}
                  weekObj={createTimeIntervals(visitHours)}
              />
          </div>
          <div className={styles.hours}>
              <HubHours visitHours={visitHours}/>
          </div>
          <div className={styles.map}>
              <Map mapInfo={map}/>
          </div>
      </div>
    );
}

export default ContactContainer;