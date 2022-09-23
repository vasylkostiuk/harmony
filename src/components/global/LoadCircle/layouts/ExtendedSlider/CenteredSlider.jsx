import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CenteredSlider = ({images}) => {
    return (
        <div className='container'>
            <div className='centered'>
                <div>
                    <Swiper
                        spaceBetween={10}
                        navigation
                        centeredSlides={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Navigation, Pagination]}
                        className='swiper'
                    >
                        {images.map((image, idx) => {
                            return <SwiperSlide key={idx}>
                                <img
                                    src={image}
                                    style={{
                                        height: '100%',
                                        objectFit: "cover",
                                        padding: '0 60px'
                                    }}
                                    alt='Harmony Domes'
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