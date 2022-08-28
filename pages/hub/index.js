import {getHub} from "../../src/preRender/ISR";
import HubContainer from "../../src/components/Hub/HubContainer";
import Footer from "../../src/components/Footer/Footer";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";

const Hub = ({hub, footer, header}) => {
    return (
        <>
            <div className="container">
                <HeaderTop
                    productLinks={header?.productLinks}
                    otherLinks={header?.otherLinks}
                    logoUrl={header?.logo?.url}
                />
            </div>
            <HubContainer hub={hub}/>
            <Footer footer={footer}/>
        </>
    );
}

export const getStaticProps = getHub;

export default Hub;