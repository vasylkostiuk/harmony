import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Modal from "../Modal/Modal";
import CenteredSlider from "./CenteredSlider";
import {useCallback, useState} from "react";
import {setSlide} from "../../../../../services/setSlide";

const ExtendedSlider = ({images}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [slideImages, setShowImages] = useState([]);

    const showModal = useCallback(
        () => {
            setShowPopup(false)
        },
        [showPopup],
    );

    return (
        <>
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
                            <img
                                src={image}
                                style={{width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer'}}
                                alt='Harmony Domes'
                                onClick={() => {
                                    setShowImages([...setSlide(images, idx)])
                                    setShowPopup(true);
                                }}
                            />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
            <Modal showModal={showPopup} closeCallback={showModal}>
                <CenteredSlider images={slideImages}/>
            </Modal>
        </>
    );
}

export default ExtendedSlider;