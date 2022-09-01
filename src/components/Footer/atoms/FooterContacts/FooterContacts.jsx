import styles from "../../../Hub/atoms/Contacts/Contacts.module.css";

const FooterContacts = ({phoneNumber, email, address}) => {
    return (
      <div>
          <h3 className={styles.title}>Contact info</h3>
          <a href={`tel:${phoneNumber}`} className={styles.contact__item} style={{cursor: 'pointer'}}>{phoneNumber}</a>
          <a href={`mailto:${email}`} className={styles.contact__item} style={{cursor: 'pointer'}}>{email}</a>
          {
              address
              ?
                  <p className={styles.contact__item}>{address}</p>
              :
                  <></>
          }
      </div>
    );
}

export default FooterContacts;