import {GetStaticSequencePage} from "../../src/preRender/ISR";
import {useEffect} from "react";
import {sequenceColors} from "../../src/apolloClient/reactiveVariables/sequenceColors";
import Footer from "../../src/components/Footer/Footer";
import SequenceShort from "../../src/components/Sequence/SequenceShort";

const SequencePage = ({sequenceData, footer}) => {

    useEffect(() => {
        sequenceColors([...sequenceData?.sequenceColors]);
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