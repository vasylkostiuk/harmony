import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation, FreeMode, Thumbs} from "swiper";
import Image from "next/image";
import {useState} from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/thumbs";
import customLoader from "../../../../../preRender/customLoader";

const CenteredSlider = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='container'>
            <div className='centered'>
                <div>
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
                                <img
                                    src={image}
                                    style={{
                                        height: '100%',
                                        objectFit: "contain"
                                    }}
                                    alt='Harmony Domes'
                                />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
                <div>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={6}
                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            1919: {
                                slidesPerView: 7
                            }
                        }
                        }
                    >
                        {images.map((image, idx) => {
                            return <SwiperSlide key={idx}>
                                <Image
                                    src={image}
                                    width={120}
                                    height={100}
                                    alt='Harmony Domes'
                                    loader={customLoader}
                                    placeholder='blur'
                                    blurDataURL={image}
                                />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default CenteredSlider;