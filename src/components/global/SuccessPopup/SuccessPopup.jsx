import styles from './SuccessPopup.module.css';
import Link from "next/link";

const defaults = {
    title: "Youre request have been successful sent",
    subtitle: "We will contact you soon, thanks!",
    button: "Got it"
}

const SuccessPopup = ({title = defaults.title, subtitle = defaults.subtitle, button = defaults.button}) => {
    return (
        <div className={styles.container}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="black" strokeWidth="2"/>
                <path d="M22.9962 12.3184L14.1674 21.1472L10.1543 17.1341" stroke="#18181B" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
            <Link href={'/'} passHref>
                <button className={styles.button}>{button}</button>
            </Link>
        </div>
    );
}

export default SuccessPopup;