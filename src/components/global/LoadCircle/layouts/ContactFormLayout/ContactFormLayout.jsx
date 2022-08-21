import styles from './ContactFormLayout.module.css';

const ContactFormLayout = ({children}) => {
    return (
      <div className={styles.container}>
          {children}
      </div>
    );
}

export default ContactFormLayout;