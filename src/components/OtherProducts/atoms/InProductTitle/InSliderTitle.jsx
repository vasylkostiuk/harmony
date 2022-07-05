import styles from "./InSliderTitle.module.css";
import Link from "next/link";

const InSliderTitle = ({title, link, linkTitle}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <Link href={`/${link}`} passHref>
                <div className={styles.link__container}>
                    <p className={styles.link}>{linkTitle}</p>
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7.24L1 14" stroke="black" strokeWidth="2"/>
                    </svg>
                </div>
            </Link>
        </div>
    );
}

export default InSliderTitle;