import {GetStaticSequencePageLong, GetStaticSequencePagesLongPath} from "../../../src/preRender/ISR";
import HeaderTop from "../../../src/components/Header/molecules/HeaderTop/HeaderTop";
import Footer from "../../../src/components/Footer/Footer";
import VideoInfoContainer from "../../../src/components/Sequence/organisms/VideoInfoContainer/VideoInfoContainer";
import PreSequenceHeader from "../../../src/components/Sequence/atoms/PreSequenceHeader/PreSequenceHeader";
import SequenceContainer from "../../../src/components/Sequence/molecules/SequenceContainer/SequenceContainer";
import {useEffect} from "react";
import {sequenceColors} from "../../../src/apolloClient/reactiveVariables/sequenceColors";
import LaptopGifBlock from "../../../src/components/Sequence/atoms/LaptopGIfBlock/LaptopGifBlock";
import ComparingSlider from "../../../src/components/Sequence/molecules/ComparingSlider/ComparingSlider";
import SequenceAdvantages from "../../../src/components/Sequence/molecules/SequenceAdvantages/SequenceAdvantages";

const SequencePageLong = ({sequenceData, footer, header}) => {

    useEffect(() => {
        if (sequenceData?.sequenceColors?.length) {
            sequenceColors([...sequenceData?.sequenceColors]);
        }
    }, [sequenceData?.id]);

    return (
        <>
            <div className="container">
                <HeaderTop
                    productLinks={header?.productLinks}
                    otherLinks={header?.otherLinks}
                    logoUrl={header?.logo?.url}
                />
            </div>
            <VideoInfoContainer heroVideo={sequenceData?.heroVideo} info={sequenceData?.info}/>
            <div className="desktop">
                <PreSequenceHeader randomHeader={sequenceData?.presequenceHeader}/>
                <SequenceContainer images={sequenceData?.sequence?.sequence}/>
            </div>
            <LaptopGifBlock laptopGifBlock={sequenceData?.laptopGifBlock}/>
            <SequenceAdvantages
                title={sequenceData?.advantageTitle}
                firstImage={sequenceData?.advantageImageFirst}
                secondImage={sequenceData?.advantageImageSecond}
                advantages={sequenceData?.advantages}
            />
            <ComparingSlider category={sequenceData?.category}/>
            <Footer footer={footer}/>
        </>
    )
}

export const getStaticPaths = GetStaticSequencePagesLongPath;

export const getStaticProps = GetStaticSequencePageLong;

export default SequencePageLong;