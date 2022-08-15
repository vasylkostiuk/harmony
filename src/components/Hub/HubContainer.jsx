import HubHero from "./atoms/HubHero/HubHero";
import HubAboutUs from "./atoms/HubAboutUs/HubAboutUs";
import ContactContainer from "./molecules/ContactContainer/ContactContainer";
import OtherArticles from "../Articles/atoms/OtherArticles/OtherArticles";
import HubSlider from "./atoms/HubSlider/HubSlider";
import InSliderTitle from "../OtherProducts/atoms/InProductTitle/InSliderTitle";

const HubContainer = ({hub}) => {
    const {
        title,
        mainImage,
        aboutUsTitle,
        aboutUsLeftColumn,
        aboutUsRightColumn,
        contactInfo,
        sliderImages,
        visitHours
    } = hub;

    return (
        <div className="container">
            <HubHero title={title} imageSrc={mainImage?.url} width={mainImage?.width} height={mainImage?.height}/>
            <ContactContainer contactInfo={contactInfo} visitHours={visitHours}/>
            <HubAboutUs title={aboutUsTitle} leftColumnText={aboutUsLeftColumn} rightColumnText={aboutUsRightColumn}/>
            <HubSlider images={sliderImages}/>
            <OtherArticles>
                <InSliderTitle
                    title={'Our News'}
                    linkTitle={'All news'}
                    link={'articles'}
                />
            </OtherArticles>
            <HubSlider/>
        </div>
    )
}

export default HubContainer;