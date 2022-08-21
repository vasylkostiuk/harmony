import {useReactiveVar} from "@apollo/client";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Image from "next/image";
import {
    galleryCategory,
    galleryCount,
    galleryVar,
    getImagesToShow
} from "../../apolloClient/reactiveVariables/gallery";
import GalleryLoadMoreBtn from "./atoms/GalleryLoadMoreBtn/GalleryLoadMoreBtn";

const Gallery = () => {
    const gal = useReactiveVar(galleryVar);
    const count = useReactiveVar(galleryCount);
    const category = useReactiveVar(galleryCategory);

    console.log(getImagesToShow(gal, category))


    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{250: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="15px">
                    {
                        gal && gal?.length
                        ?
                            getImagesToShow(gal, category).map((el) => {
                                return <div style={{width: '100%'}} key={el?.id}>
                                    <Image src={el?.url}
                                           width={el?.width}
                                           height={el?.height}
                                           placeholder="blur"
                                           blurDataURL={el?.url}
                                    />
                                </div>
                            })
                        :
                            <></>
                    }
                </Masonry>
            </ResponsiveMasonry>
            <GalleryLoadMoreBtn/>
        </div>
    );
}

export default Gallery;