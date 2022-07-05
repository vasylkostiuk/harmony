import {useQuery} from "@apollo/client";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {GET_SLIDER_ARTICLES} from "../../../../apolloClient/queries";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import SliderArticle from "./SliderArticle";

const OtherArticles = ({children}) => {
    const {data, loading} = useQuery(GET_SLIDER_ARTICLES, {
        fetchPolicy: "no-cache"
    });

    return (
        <div className='products'>
            {children}
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
                    !loading && data?.articles && data?.articles?.length && data?.articles?.map(article => {
                        return <SwiperSlide key={article?.id}>
                            <SliderArticle
                                title={article?.title}
                                imageSrc={article?.presentationImage?.url}
                                articleId={article?.id}
                            />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default OtherArticles;