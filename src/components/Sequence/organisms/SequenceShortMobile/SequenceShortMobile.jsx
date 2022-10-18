import styles from "../SequenceShortDesktop/SequenceShortDesktop.module.css";
import PreSequenceHero from "../../atoms/PreSequenceHero/PreSequenceHero";
import SequenceParametersOrganism from "../SequenceParametersOrganism/SequenceParametersOrganism";
import SequenceInfo from "../../atoms/SequenceInfo/SequenceInfo";
import HubBlock from "../../atoms/HubBlock/HubBlock";
import OtherProducts from "../../../OtherProducts/OtherProducts";
import InProductTitle from "../../../OtherProducts/atoms/InProductTitle/InSliderTitle";
import MobileGif from "../../atoms/MobileGif/MobileGif";
import SequenceColorChangerContainer from "../../atoms/SequenceColorChanger/SequenceColorChangerContainer";

const SequenceShortMobile = ({sequenceData}) => {
    return (
        <div>
            <PreSequenceHero
                imageSrc={sequenceData?.presentationHero?.image?.url}
                width={sequenceData?.presentationHero?.image?.width}
                height={sequenceData?.presentationHero?.image?.height}
                title={sequenceData?.presentationHero?.title}
                description={sequenceData?.presentationHero?.linkText}
                randomHeader={sequenceData?.presentationHero?.bottomHeader}
            />
            <MobileGif url={sequenceData?.mobileGif?.url}/>
            <SequenceParametersOrganism parametersSection={sequenceData?.parametersSection}/>
            <SequenceColorChangerContainer isDesktop={false} isDisplayed={true}/>
            <SequenceInfo sequenceInfo={sequenceData?.info}/>
            <HubBlock hubBlock={sequenceData?.hubBlock}/>
            <div className={styles.margin__fixer}></div>
            <div className="container">
                <OtherProducts>
                    <InProductTitle
                        title={'Other Products'}
                        linkTitle={'All products'}
                        link={'product'}
                    />
                </OtherProducts>
            </div>
        </div>
    );
}

export default SequenceShortMobile;