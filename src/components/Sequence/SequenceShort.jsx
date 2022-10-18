import styles from './SequenceShort.module.css';
import PreSequenceHero from "./atoms/PreSequenceHero/PreSequenceHero";
import SequenceContainer from "./molecules/SequenceContainer/SequenceContainer";
import SequenceInfo from "./atoms/SequenceInfo/SequenceInfo";
import HubBlock from "./atoms/HubBlock/HubBlock";
import OtherProducts from "../OtherProducts/OtherProducts";
import InProductTitle from "../OtherProducts/atoms/InProductTitle/InSliderTitle";
import SequenceParametersOrganism from "./organisms/SequenceParametersOrganism/SequenceParametersOrganism";

const SequenceShort = ({sequenceData}) => {
    return (
        <div>
            <div className="desktop">
                <PreSequenceHero
                    imageSrc={sequenceData?.presentationHero?.image?.url}
                    width={sequenceData?.presentationHero?.image?.width}
                    height={sequenceData?.presentationHero?.image?.height}
                    title={sequenceData?.presentationHero?.title}
                    description={sequenceData?.presentationHero?.linkText}
                    randomHeader={sequenceData?.presentationHero?.bottomHeader}
                />
                <SequenceContainer images={sequenceData?.sequence?.sequence}/>
            </div>
            <SequenceParametersOrganism parametersSection={sequenceData?.parametersSection}/>
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

export default SequenceShort;