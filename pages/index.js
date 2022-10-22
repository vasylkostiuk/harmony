import HeroSlider from "../src/components/Hero/HeroSlider";
import {GetStaticMainPage} from "../src/preRender/ISR";
import OtherProducts from "../src/components/OtherProducts/OtherProducts";
import InHeroTitle from "../src/components/OtherProducts/atoms/InHeroTitle/InHeroTitle";
import Footer from "../src/components/Footer/Footer";
import HeaderTop from "../src/components/Header/molecules/HeaderTop/HeaderTop";
import VideoPlayer from "../src/components/Hero/atoms/VideoPlayer/VideoPlayer";

export default function Home({heroBlocks, videoInfo, sliderInfo, footer, header}) {
  return (
      <>
        <div className="container">
          <HeaderTop
              productLinks={header?.productLinks}
              otherLinks={header?.otherLinks}
              logoUrl={header?.logo?.url}
              isAbsolute={true}
          />
        </div>
        <HeroSlider heroBlocks={heroBlocks}/>
        <div className="container">
            <OtherProducts>
                <InHeroTitle
                    title={sliderInfo?.sliderTitle}
                    description={sliderInfo?.sliderDescription}
                    preTitle={sliderInfo?.preTitle}
                />
            </OtherProducts>
            <VideoPlayer
                url={videoInfo?.video?.url}
                link={videoInfo?.link}
                linkText={videoInfo?.linkText}
            />
        </div>
        <Footer footer={footer}/>
      </>
  )
}

export const getStaticProps = GetStaticMainPage;

