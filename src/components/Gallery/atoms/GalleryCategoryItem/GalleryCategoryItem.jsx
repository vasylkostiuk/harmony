import styles from "../../../LayoutProduct/Atoms/CategoryItem/CategoryItem.module.css";
import {galleryCategory, galleryCount} from "../../../../apolloClient/reactiveVariables/gallery";

const GalleryCategoryItem = ({name, isCurrent}) => {
    const current = isCurrent ? styles.current : '';

    return (
        <p>
            <span
                className={`${styles.category} ${current}`}
                onClick={() => {
                    galleryCategory(name)
                    galleryCount(0)
                }}
            >
                {name}
            </span>
        </p>
    );
}

export default GalleryCategoryItem;