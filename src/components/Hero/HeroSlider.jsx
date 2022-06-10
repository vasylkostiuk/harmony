import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, EffectFade} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import Hero from "./Hero";

const HeroSlider = ({heroBlocks, video}) => {
    return (
        <div className='hero'>
            <Swiper
                slidesPerView={1}
                effect={"fade"}
                navigation
                pagination={{
                    clickable: true
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
        </div>
    );
}

export default HeroSlider;