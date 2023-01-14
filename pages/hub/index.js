import {getHub} from "../../src/preRender/ISR";
import HubContainer from "../../src/components/Hub/HubContainer";
import Footer from "../../src/components/Footer/Footer";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";
import BreadCrumbs from "../../src/components/global/BreadCrumbs/BreadCrumbs";
import HeadGenerator from "../../src/components/global/HeadGenerator/HeadGenerator";

const Hub = ({hub, footer, header}) => {
    return (
        <>
            <HeadGenerator title={hub?.seoTitle} description={hub?.seoDescription} keywords={hub?.seoKeywords}/>
            <div className="container">
                <HeaderTop
                    productLinks={header?.productLinks}
                    favicon={header?.favicon?.url}
                    otherLinks={header?.otherLinks}
                    logoUrl={header?.logo?.url}
                />
                <BreadCrumbs master={'Hub'}/>
            </div>
            <HubContainer hub={hub}/>
            <Footer footer={footer}/>
        </>
    );
}

export const getStaticProps = getHub;

export default Hub;