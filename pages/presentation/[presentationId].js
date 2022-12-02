import {sequenceColors, sequenceColorsMobile} from "../../src/apolloClient/reactiveVariables/sequenceColors";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";
import SequenceShort from "../../src/components/Sequence/layouts/SequenceShort/SequenceShort";
import Footer from "../../src/components/Footer/Footer";
import {GetStaticSequencePage, GetStaticSequencePagesPath} from "../../src/preRender/ISR";
import {useEffect} from "react";
import BreadCrumbs from "../../src/components/global/BreadCrumbs/BreadCrumbs";
import {showHeaderDropdown} from "../../src/apolloClient/reactiveVariables/header";

const SequencePage = ({sequenceData, footer, header}) => {

    useEffect(() => {
        showHeaderDropdown(false);
        if (sequenceData?.sequenceColors.length) {
            sequenceColors([...sequenceData?.sequenceColors]);
        }
        if (sequenceData?.sequenceColorsMobile.length) {
            sequenceColorsMobile([...sequenceData?.sequenceColorsMobile]);
        }
    }, [sequenceData?.id]);

    return (
        <div>
            <div className="container">
                <HeaderTop
                    productLinks={header?.productLinks}
                    otherLinks={header?.otherLinks}
                    logoUrl={header?.logo?.url}
                />
                <BreadCrumbs master={sequenceData?.presentationHero?.title}/>
            </div>
            <SequenceShort sequenceData={sequenceData}/>
            <Footer footer={footer}/>
        </div>
    );
}

export const getStaticPaths = GetStaticSequencePagesPath;

export const getStaticProps = GetStaticSequencePage;

export default SequencePage;