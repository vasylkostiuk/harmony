import styles from './MainLink.module.css';
import Link from "next/link";

const MainLink = ({link, text}) => {
    return (
        <Link href={link} passHref>
            <div className={styles.link__container}>
                <div className={styles.link}>{text}</div>
                <div className={styles.line}></div>
            </div>
        </Link>
    );
}

export default MainLink;