import styles from './ComparingSlider.module.css';
import {useQuery} from "@apollo/client";
import {GET_PRODUCT_COMPARING} from "../../../../apolloClient/queries";
import ComparingSliderItem from "../../atoms/ComparingSliderItem/ComparingSliderItem";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const comparingTitle = 'Compare Our Products'

const ComparingSlider = ({category, title = comparingTitle}) => {
    const {data} = useQuery(GET_PRODUCT_COMPARING, {
        variables: {
            category
        },
        fetchPolicy: "no-cache"
    })

    return (
        <div className="container products comparing">
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
                <Swiper
                    slidesPerView={3}
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
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        1023: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                    }}
                    modules={[Pagination,Navigation]}
                    className='swiper'
                >
                    {
                        data && data?.products?.length
                            ?
                            data?.products.map(item => {
                                return <SwiperSlide key={item?.id}>
                                    <ComparingSliderItem product={item}/>
                                </SwiperSlide>
                            })
                            :
                            <></>
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default ComparingSlider;