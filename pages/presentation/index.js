import {GetStaticSequencePage} from "../../src/preRender/ISR";
import SequenceContainer from "../../src/components/Sequence/SequenceContainer";
import {useEffect, useState} from "react";
import {sequenceColors} from "../../src/apolloClient/reactiveVariables/sequenceColors";
import PreSequenceHero from "../../src/components/Sequence/PreSequenceHero/PreSequenceHero";
import Footer from "../../src/components/Footer/Footer";

const SequencePage = ({sequenceData, footer}) => {
    const [actualSequence, setActualSequence] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(min-width: 1281px)").matches) {
            setActualSequence(sequenceData.sequence.sequence);
            sequenceColors([...sequenceData?.sequenceColors]);
        } else {
            setActualSequence(sequenceData.tabletSequence.sequence);
            sequenceColors([...sequenceData?.tabletSequenceColors]);
        }
    }, [sequenceData?.id]);

    return (
        <>
            <PreSequenceHero
                imageSrc={sequenceData?.presentationHero?.image?.url}
                width={sequenceData?.presentationHero?.image?.width}
                height={sequenceData?.presentationHero?.image?.height}
                title={sequenceData?.presentationHero?.title}
                description={sequenceData?.presentationHero?.linkText}
                randomHeader={sequenceData?.presentationHero?.bottomHeader}
            />
            {
                actualSequence && actualSequence?.length
                ?
                <SequenceContainer images={actualSequence}/>
                :
                <></>
            }
            <Footer footer={footer}/>
        </>
    );
}

export const getStaticProps = GetStaticSequencePage;

export default SequencePage;