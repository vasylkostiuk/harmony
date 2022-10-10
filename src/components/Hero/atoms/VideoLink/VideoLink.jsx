import styles from './VideoLink.module.css';
import Link from "next/link";

const VideoLink = ({link, linkText}) => {
    return (
        <Link href={link} passHref>
            <div className={styles.container}>
                <p className={styles.text}>{linkText}</p>
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L7 7.74L1 14.5" stroke="white" strokeWidth="2"/>
                </svg>
            </div>
        </Link>
    );
}

export default VideoLink;