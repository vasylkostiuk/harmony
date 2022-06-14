import Hero from "./Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const HeroSlider = ({heroBlocks, video}) => {
    return (
        <div className="hero">
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                transitionTime={750}
                showArrows={false}
            >
                {heroBlocks.map(el => {
                    return <Hero {...el} key={el?.id}/>
                })}
            </Carousel>
        </div>
    );
}

export default HeroSlider;