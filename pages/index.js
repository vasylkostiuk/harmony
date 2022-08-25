import HeroSlider from "../src/components/Hero/HeroSlider";
import {GetStaticMainPage} from "../src/preRender/ISR";
import OtherProducts from "../src/components/OtherProducts/OtherProducts";
import InHeroTitle from "../src/components/OtherProducts/atoms/InHeroTitle/InHeroTitle";
import Footer from "../src/components/Footer/Footer";

export default function Home({heroBlocks, video, footer}) {
  return <>
    <HeroSlider heroBlocks={heroBlocks} video={video}/>
    <div className="container">
      <OtherProducts>
        <InHeroTitle/>
      </OtherProducts>
    </div>
    <Footer footer={footer}/>
  </>
}

export const getStaticProps = GetStaticMainPage;

