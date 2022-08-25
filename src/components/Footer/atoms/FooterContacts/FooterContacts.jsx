import styles from "../../../Hub/atoms/Contacts/Contacts.module.css";

const FooterContacts = ({phoneNumber, email}) => {
    return (
      <div>
          <h3 className={styles.title}>Contact info</h3>
          <p className={styles.contact__item}>{phoneNumber}</p>
          <p className={styles.contact__item}>{email}</p>
      </div>
    );
}

export default FooterContacts;