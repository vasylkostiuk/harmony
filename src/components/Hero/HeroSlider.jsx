import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, EffectFade} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import Hero from "./Hero";

const HeroSlider = ({heroBlocks, video}) => {
    const pagination = {
        clickable: true,
    };
    return (
        <Swiper
            slidesPerView={1}
            direction={"vertical"}
            effect={"fade"}
            navigation
            pagination={pagination}
            breakpoints={{
                1: {
                    direction: "horizontal",
                },
                321: {
                    direction: "horizontal",
                },
                769: {
                    direction: "horizontal",
                },
                1025: {
                    direction: "vertical"
                },
            }}
            modules={[Pagination,EffectFade]}
            className="swiper"
        >
            {heroBlocks.map(el => {
                return <SwiperSlide key={el.id}>
                    <Hero {...el}/>
                </SwiperSlide>
            })}
        </Swiper>

    );
}

export default HeroSlider;