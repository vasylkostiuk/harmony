import {getHub} from "../../src/preRender/ISR";
import HubContainer from "../../src/components/Hub/HubContainer";
import Footer from "../../src/components/Footer/Footer";

const Hub = ({hub, footer}) => {
    return (
        <>
            <HubContainer hub={hub}/>
            <Footer footer={footer}/>
        </>
    );
}

export const getStaticProps = getHub;

export default Hub;