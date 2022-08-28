import HeroSlider from "../src/components/Hero/HeroSlider";
import {GetStaticMainPage} from "../src/preRender/ISR";
import OtherProducts from "../src/components/OtherProducts/OtherProducts";
import InHeroTitle from "../src/components/OtherProducts/atoms/InHeroTitle/InHeroTitle";
import Footer from "../src/components/Footer/Footer";
import HeaderTop from "../src/components/Header/molecules/HeaderTop/HeaderTop";

export default function Home({heroBlocks, video, footer, header}) {
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
        <HeroSlider heroBlocks={heroBlocks} video={video}/>
        <div className="container">
          <OtherProducts>
            <InHeroTitle/>
          </OtherProducts>
        </div>
        <Footer footer={footer}/>
      </>
  )
}

export const getStaticProps = GetStaticMainPage;

