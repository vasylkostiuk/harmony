import {getHub} from "../../src/preRender/ISR";
import HubContainer from "../../src/components/Hub/HubContainer";
import {createTimeIntervals, createWeek} from "../../src/services/hubHours";

const Hub = ({hub}) => {
    console.log(createTimeIntervals(hub?.visitHours));
    return (
        <HubContainer hub={hub}/>
    );
}

export const getStaticProps = getHub;

export default Hub;