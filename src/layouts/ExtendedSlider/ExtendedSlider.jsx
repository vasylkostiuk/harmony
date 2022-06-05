import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import customLoader from "../../preRender/customLoader";

const ExtendedSlider = ({images}) => {
    return (
        <div className='extended'>
            <Swiper
                slidesPerView={4}
                direction={"horizontal"}
                navigation
                spaceBetween={20}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    1: {
                        slidesPerView: 1
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    1023: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                }}
                modules={[Pagination,Navigation]}
                className='swiper'
            >
                {images.map((image, idx) => {
                    return <SwiperSlide key={idx}>
                        <Image
                            src={image}
                            width={235}
                            height={200}
                            placeholder='blur'
                            blurDataURL={image}
                            alt='Harmony Domes'
                            loader={customLoader}
                        />
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
}

export default ExtendedSlider;