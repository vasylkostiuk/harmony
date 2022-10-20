import {sequenceColors, sequenceColorsMobile} from "../../src/apolloClient/reactiveVariables/sequenceColors";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";
import SequenceShort from "../../src/components/Sequence/layouts/SequenceShort/SequenceShort";
import Footer from "../../src/components/Footer/Footer";
import {GetStaticSequencePage, GetStaticSequencePagesPath} from "../../src/preRender/ISR";
import {useEffect} from "react";

const SequencePage = ({sequenceData, footer, header}) => {

    useEffect(() => {
        sequenceColors([...sequenceData?.sequenceColors]);
        sequenceColorsMobile([...sequenceData?.sequenceColorsMobile]);
    }, [sequenceData?.id]);

    return (
        <div>
            <div className="container">
                <HeaderTop
                    productLinks={header?.productLinks}
                    otherLinks={header?.otherLinks}
                    logoUrl={header?.logo?.url}
                />
            </div>
            <SequenceShort sequenceData={sequenceData}/>
            <Footer footer={footer}/>
        </div>
    );
}

export const getStaticPaths = GetStaticSequencePagesPath;

export const getStaticProps = GetStaticSequencePage;

export default SequencePage;