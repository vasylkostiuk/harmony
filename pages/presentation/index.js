import {GetStaticSequencePage} from "../../src/preRender/ISR";
import {useEffect} from "react";
import {sequenceColors, sequenceColorsMobile} from "../../src/apolloClient/reactiveVariables/sequenceColors";
import Footer from "../../src/components/Footer/Footer";
import SequenceShort from "../../src/components/Sequence/layouts/SequenceShort/SequenceShort";

const SequencePage = ({sequenceData, footer}) => {

    useEffect(() => {
        sequenceColors([...sequenceData?.sequenceColors]);
        sequenceColorsMobile([...sequenceData?.sequenceColorsMobile]);
    }, [sequenceData?.id]);

    return (
        <div>
            <SequenceShort sequenceData={sequenceData}/>
            <Footer footer={footer}/>
        </div>
    );
}

export const getStaticProps = GetStaticSequencePage;

export default SequencePage;