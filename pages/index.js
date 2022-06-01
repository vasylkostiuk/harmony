import HeroSlider from "../src/components/Hero/HeroSlider";
import {GetStaticMainPage} from "../src/preRender/ISR";

export default function Home({heroBlocks, video}) {
  return <>
    <HeroSlider heroBlocks={heroBlocks} video={video}/>
  </>
}

export const getStaticProps = GetStaticMainPage;

