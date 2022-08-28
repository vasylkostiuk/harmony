import styles from './SubLink.module.css';
import Link from "next/link";

const SubLink = ({link, text}) => {
    return (
        <Link href={link} passHref>
            <p className={styles.link}>{text}</p>
        </Link>
    );
}

export default SubLink;