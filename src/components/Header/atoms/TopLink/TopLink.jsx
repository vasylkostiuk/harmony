import styles from './TopLink.module.css';
import Link from "next/link";
import {showCheckout, showHeaderDropdown} from "../../../../apolloClient/reactiveVariables/header";

const TopLink = ({link, text, withDropdown = false}) => {

    const content = withDropdown
        ?
        <Link href={link} passHref>
            <p className={styles.link}>{text}</p>
        </Link>
        :
        <p className={styles.link} onClick={() => {
            showCheckout(false);
            showHeaderDropdown(!showHeaderDropdown());
        }}
        >
        {text}
        </p>;

    return (
        <>
            {
                content
            }
        </>
    );
}

export default TopLink;