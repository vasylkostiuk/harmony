import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import styles from "./HubSlider.module.css";

const HubSlider = ({images}) => {
    return (
        <div className="products">
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                direction={"horizontal"}
                pagination={{
                    clickable: true
                }}
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                className='swiper'
            >
                {
                    images?.map(img => {
                        return (
                            <SwiperSlide key={img?.id}>
                                <img src={img?.url} className={styles.image} alt="Harmony Domes"/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default HubSlider;