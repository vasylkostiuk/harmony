import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation, FreeMode, Thumbs} from "swiper";
import Image from "next/image";
import {useState} from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/thumbs";
import customLoader from "../../preRender/customLoader";

const ExtendedSlider = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='centered'>
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                navigation
                centeredSlides={true}
                modules={[Navigation, FreeMode, Thumbs]}
                className='swiper'
            >
                {images.map((image, idx) => {
                    return <SwiperSlide key={idx}>
                        <Image
                            src={image}
                            layout='fill'
                            alt='Harmony Domes'
                            loader={customLoader}
                            placeholder='blur'
                            blurDataURL={image}
                        />
                    </SwiperSlide>
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="mySwiper"
                breakpoints={{
                        1919: {
                            slidesPerView: 5
                        }
                    }
                }
            >
                {images.map((image, idx) => {
                    return <SwiperSlide key={idx}>
                        <Image
                            src={image}
                            width={235}
                            height={200}
                            alt='Harmony Domes'
                            loader={customLoader}
                            placeholder='blur'
                            blurDataURL={image}
                        />
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
}

export default ExtendedSlider;