import styles from './ContactFormInput.module.css';

const ContactFormInput = ({type, placeholder, label}) => {
    return (
        <form className={styles.form}>
            <label htmlFor={placeholder} className={styles.label}>{label}</label>
            <input id={placeholder} type={type} className={styles.input} placeholder={placeholder}/>
        </form>
    );
}

export default ContactFormInput;