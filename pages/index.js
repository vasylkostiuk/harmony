import HeroSlider from "../src/components/Hero/HeroSlider";
import {GetStaticMainPage} from "../src/preRender/ISR";
import OtherProducts from "../src/components/OtherProducts/OtherProducts";
import InHeroTitle from "../src/components/OtherProducts/atoms/InHeroTitle/InHeroTitle";

export default function Home({heroBlocks, video}) {
  return <>
    <HeroSlider heroBlocks={heroBlocks} video={video}/>
    <div className="container">
      <OtherProducts>
        <InHeroTitle/>
      </OtherProducts>
    </div>
  </>
}

export const getStaticProps = GetStaticMainPage;

