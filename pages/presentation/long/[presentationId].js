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
import HubBlock from "../../../src/components/Sequence/atoms/HubBlock/HubBlock";
import OtherProducts from "../../../src/components/OtherProducts/OtherProducts";
import InProductTitle from "../../../src/components/OtherProducts/atoms/InProductTitle/InSliderTitle";
import BreadCrumbs from "../../../src/components/global/BreadCrumbs/BreadCrumbs";

const SequencePageLong = ({sequenceData, footer, header}) => {

    useEffect(() => {
        if (sequenceData?.sequenceColors?.length) {
            sequenceColors([...sequenceData?.sequenceColors]);
        }
    }, [sequenceData?.id]);

    return (
        <div className="container__sequence">
            <div className="container">
                <HeaderTop
                    productLinks={header?.productLinks}
                    otherLinks={header?.otherLinks}
                    logoUrl={header?.logo?.url}
                />
                <BreadCrumbs master={sequenceData?.category}/>
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
            <div className="margin__minus"></div>
            <HubBlock hubBlock={sequenceData?.hubBlock}/>
            <div className="container">
                <OtherProducts>
                    <InProductTitle
                        title={'Other Products'}
                        linkTitle={'All products'}
                        link={'product'}
                    />
                </OtherProducts>
            </div>
            <Footer footer={footer}/>
        </div>
    )
}

export const getStaticPaths = GetStaticSequencePagesLongPath;

export const getStaticProps = GetStaticSequencePageLong;

export default SequencePageLong;