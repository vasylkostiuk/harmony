import styles from './BreadCrumbs.module.css';
import Link from "next/link";

const BreadCrumbs = ({master, masterLink = '', detail = ''}) => {
    return (
        <div className={styles.container}>
            <Link href={'/'} passHref>
                <p className={styles.item}>Home</p>
            </Link>
            {
                masterLink
                ?
                <div className={styles.item__container}>
                    <svg className={styles.icon} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5.16L1 9.66667" stroke="black" strokeWidth="1.5"/>
                    </svg>
                    <Link href={masterLink} passHref>
                        <p className={styles.item} style={{cursor: 'pointer'}}>{master}</p>
                    </Link>
                </div>
                :
                <div className={styles.item__container}>
                    <svg className={styles.icon} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5.16L1 9.66667" stroke="black" strokeWidth="1.5"/>
                    </svg>
                    <p className={`${styles.item} ${styles.item__final}`}>{master}</p>
                </div>
            }
            {
                detail
                ?
                <div className={styles.item__container}>
                    <svg className={styles.icon} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5.16L1 9.66667" stroke="black" strokeWidth="1.5"/>
                    </svg>
                    <p className={`${styles.item} ${styles?.item__final}`}>{detail}</p>
                </div>
                :
                <></>
            }
        </div>
    );
}

export default BreadCrumbs;