import styles from './FooterAdvantage.module.css';
import Link from "next/link";

const FooterAdvantage = ({title, description, link, icon}) => {
    return (
        <div className={styles.container}>
            <img src={icon} alt="Harmony domes" className={styles.icon}/>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <Link href={link} passHref>
                    <a className={styles.button__container}>
                        <p className={styles.button__text}>More</p>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.5L5.5 5.66L1.5 10.1667" stroke="#18181B" strokeWidth="1.5"/>
                        </svg>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default FooterAdvantage;