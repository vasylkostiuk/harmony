import styles from './FooterMainContainer.module.css';
import LinksWrapper from "../../molecules/LinksWrapper/LinksWrapper";
import LogoContainer from "../../atoms/LogoContainer/LogoContainer";

const FooterMainContainer = ({links, logo, logoDescription, socialLinks}) => {
    return (
        <div className={styles.container__color}>
            <div className="container">
                <div className={styles.container}>
                    <LogoContainer logo={logo} description={logoDescription} socialLinks={socialLinks}/>
                    <LinksWrapper links={links}/>
                </div>
            </div>
        </div>
    );
}

export default FooterMainContainer;