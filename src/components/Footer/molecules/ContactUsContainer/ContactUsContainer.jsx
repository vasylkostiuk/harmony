import styles from './ContactUsContainer.module.css';
import ContactUsInput from "../../atoms/ContactUsInput/ContactUsInput";

const ContactUsContainer = () => {
    return (
        <div>
            <h3 className={styles.title}>Contact us</h3>
            <p className={styles.description}>Enter your email and we will contact you soon</p>
            <ContactUsInput/>
        </div>
    );
}

export default ContactUsContainer;