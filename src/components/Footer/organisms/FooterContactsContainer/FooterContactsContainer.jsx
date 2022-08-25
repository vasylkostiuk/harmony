import styles from './FooterContactsContainer.module.css';
import ContactUsContainer from "../../molecules/ContactUsContainer/ContactUsContainer";
import FooterContacts from "../../atoms/FooterContacts/FooterContacts";

const FooterContactsContainer = ({phoneNumber, email}) => {
    return (
        <div className={styles.container__color}>
            <div className="container">
                <div className={styles.container}>
                    <ContactUsContainer/>
                    <FooterContacts phoneNumber={phoneNumber} email={email}/>
                </div>
            </div>
        </div>
    );
}

export default FooterContactsContainer;