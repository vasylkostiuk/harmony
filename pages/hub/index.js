import {getHub} from "../../src/preRender/ISR";
import HubContainer from "../../src/components/Hub/HubContainer";

const Hub = ({hub}) => {
    console.log(hub);
    return (
        <HubContainer hub={hub}/>
    );
}

export const getStaticProps = getHub;

export default Hub;