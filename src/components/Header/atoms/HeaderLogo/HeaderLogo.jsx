import styles from './HeaderLogo.module.css';
import Link from "next/link";

const HeaderLogo = ({src}) => {
    return (
        <Link href={'/'} passHref>
            <img src={src} alt="Harmony Domes" className={styles.logo}/>
        </Link>
    );
}

export default HeaderLogo;