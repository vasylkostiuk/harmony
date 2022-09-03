import styles from './Gallery.module.css';
import {useReactiveVar} from "@apollo/client";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Image from "next/image";
import {
    galleryCategory,
    galleryCount,
    galleryVar,
    getImagesToShow, isMoreImagesToShow
} from "../../apolloClient/reactiveVariables/gallery";
import GalleryLoadMoreBtn from "./atoms/GalleryLoadMoreBtn/GalleryLoadMoreBtn";
import {useEffect, useMemo, useState} from "react";

const Gallery = () => {
    const gal = useReactiveVar(galleryVar);
    const count = useReactiveVar(galleryCount);
    const category = useReactiveVar(galleryCategory);

    const [currentImages, setCurrentImages] = useState([]);
    const showMoreImages = useMemo(() => {
        return isMoreImagesToShow(gal, category, currentImages);
    }, [category, currentImages])

    useEffect(() => {
        if (getImagesToShow(gal, category, count) && getImagesToShow(gal, category, count)?.length) {
            setCurrentImages([...getImagesToShow(gal, category, count)]);
        }
    }, [gal, count, category]);

    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{250: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="15px">
                    {
                        currentImages?.length
                        ?
                            currentImages.map((el) => {
                                return <div style={{width: '100%'}} key={el?.id}>
                                    <Image src={el?.url}
                                           width={el?.width}
                                           height={el?.height}
                                           placeholder="blur"
                                           blurDataURL={el?.url}
                                           alt="Harmony Domes"
                                    />
                                </div>
                            })
                        :
                            <></>
                    }
                </Masonry>
            </ResponsiveMasonry>
            {
                showMoreImages
                ?
                    <GalleryLoadMoreBtn/>
                :
                    <div className={styles.footer__margin}></div>
            }
        </div>
    );
}

export default Gallery;