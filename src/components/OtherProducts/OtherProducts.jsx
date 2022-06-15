import {useQuery} from "@apollo/client";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {GET_PRODUCTS} from "../../apolloClient/queries";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import SliderProduct from "./SliderProduct/SliderProduct";

const OtherProducts = ({children}) => {
    const {data, loading} = useQuery(GET_PRODUCTS, {
        variables: {
            quantity: 5
        },
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
                    !loading && data?.products && data?.products?.length && data?.products?.map(product => {
                        return <SwiperSlide key={product?.id}>
                            <SliderProduct
                                title={product?.info?.title}
                                imageSrc={product?.presentationImage?.url}
                                width={product?.presentationImage?.width}
                                height={product?.presentationImage?.height}
                                productId={product?.id}
                            />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default OtherProducts;