import titleStyles from './../../../LayoutProduct/LayoutProductContainer.module.css';
import CategoriesLayout from "../../../global/LoadCircle/layouts/CategoriesLayout/CategoriesLayout";
import {useReactiveVar} from "@apollo/client";
import {galleryCategory, galleryVar, getGalleryCategories} from "../../../../apolloClient/reactiveVariables/gallery";
import GalleryCategoryItem from "../GalleryCategoryItem/GalleryCategoryItem";
import styles from './GalleryFilters.module.css';

const GalleryFilters = ({title, description}) => {
    const gallery = useReactiveVar(galleryVar);
    const currentCategory = useReactiveVar(galleryCategory);

    return (
        <>
            <h1 className={titleStyles.title}>{title}</h1>
            <CategoriesLayout>
                {
                    getGalleryCategories(gallery) && getGalleryCategories(gallery)?.length &&
                    getGalleryCategories(gallery).map(category => {
                        return <GalleryCategoryItem
                            key={category}
                            name={category}
                            isCurrent={category === currentCategory}
                        />
                    })
                }
            </CategoriesLayout>
            <p className={styles.description}>{description}</p>
        </>
    );
}

export default GalleryFilters;