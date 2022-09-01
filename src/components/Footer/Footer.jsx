import AdvantagesContainer from "./molecules/AdvantagesContainer/AdvantagesContainer";
import FooterMainContainer from "./organisms/FooterMainContainer/FooterMainContainer";
import FooterContactsContainer from "./organisms/FooterContactsContainer/FooterContactsContainer";
import BottomInfo from "./atoms/BottomInfo/BottomInfo";

const Footer = ({footer}) => {
    return (
        <>
            <AdvantagesContainer advantages={footer?.advantages}/>
            <FooterMainContainer
                links={footer?.links}
                logo={footer?.logo?.url}
                logoDescription={footer?.description}
                socialLinks={footer?.socialLinks}
            />
            <FooterContactsContainer
                email={footer?.contacts?.email}
                phoneNumber={footer?.contacts?.tel}
                address={footer?.contacts?.adress}
            />
            <BottomInfo/>
        </>
    )
}

export default Footer;