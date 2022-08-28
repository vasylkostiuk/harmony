import Gallery from "../../src/components/Gallery/Gallery";
import {getGallery} from "../../src/preRender/ISR";
import {galleryVar} from "../../src/apolloClient/reactiveVariables/gallery";
import {useEffect, useState} from "react";
import GalleryFilters from "../../src/components/Gallery/atoms/GalleryFilters/GalleryFilters";
import Footer from "../../src/components/Footer/Footer";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";

const GalleryPage = ({gallery, footer, header}) => {
    const [showGallery, setShowGallery] = useState(false);

    useEffect(() => {
        if (gallery) {
            for (let i = 0; i < gallery?.galleryContainersConnection?.edges[0]?.node?.gallery.length; i++) {
                galleryVar().push({
                    category: gallery?.galleryContainersConnection?.edges[0]?.node?.gallery[i]?.category,
                    images: gallery?.galleryContainersConnection?.edges[0]?.node?.gallery[i]?.galleryImage
                });
            }
            setShowGallery(true)
        }
    }, [gallery])

    return (
        <>
            <div className="container">
                <HeaderTop
                    logoUrl={header?.logo?.url}
                    otherLinks={header?.otherLinks}
                    productLinks={header?.productLinks}
                />
                <GalleryFilters
                    title={gallery?.galleryContainersConnection?.edges[0]?.node?.title}
                    description={gallery?.galleryContainersConnection?.edges[0]?.node?.description}
                />
                {
                    showGallery
                        ?
                        <Gallery/>
                        :
                        <></>
                }
            </div>
            <Footer footer={footer}/>
        </>
    );
}

export const getStaticProps = getGallery;

export default GalleryPage;