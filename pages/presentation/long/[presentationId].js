import {GetStaticSequencePageLong, GetStaticSequencePagesLongPath} from "../../../src/preRender/ISR";
import HeaderTop from "../../../src/components/Header/molecules/HeaderTop/HeaderTop";
import Footer from "../../../src/components/Footer/Footer";
import VideoInfoContainer from "../../../src/components/Sequence/organisms/VideoInfoContainer/VideoInfoContainer";

const SequencePageLong = ({sequenceData, footer, header}) => {
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
            <Footer footer={footer}/>
        </>
    )
}

export const getStaticPaths = GetStaticSequencePagesLongPath;

export const getStaticProps = GetStaticSequencePageLong;

export default SequencePageLong;