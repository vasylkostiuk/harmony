import styles from './MainLink.module.css';
import Link from "next/link";
import {useState} from "react";

const MainLink = ({link, text}) => {
    const [hover, setHover] = useState(false);

    return (
        <Link href={link} passHref>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className={`${styles.link__container} ${hover ? styles.hover : ''}`}>
                    <div className={styles.link}>{text}</div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </Link>
    );
}

export default MainLink;