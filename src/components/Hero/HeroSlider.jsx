import Hero from "./Hero";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const HeroSlider = ({heroBlocks}) => {
    return (
        <div className="hero">
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={7000}
                transitionTime={1000}
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