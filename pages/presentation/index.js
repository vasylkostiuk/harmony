import {GetStaticSequencePage} from "../../src/preRender/ISR";
import SequenceContainer from "../../src/components/Sequence/SequenceContainer";
import {useEffect} from "react";
import {sequenceColors} from "../../src/apolloClient/reactiveVariables/sequenceColors";
import PreSequenceHero from "../../src/components/Sequence/PreSequenceHero/PreSequenceHero";

const SequencePage = ({sequenceData}) => {
    console.log(sequenceData);

    useEffect(() => {
        sequenceColors([...sequenceData?.sequenceColors]);
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
            <SequenceContainer images={sequenceData.sequence.sequence}/>
        </>
    );
}

export const getStaticProps = GetStaticSequencePage;

export default SequencePage;