import styles from "../../../LayoutProduct/Atoms/LoadMoreBtn/LoadMoreBtn.module.css";
import {galleryCount} from "../../../../apolloClient/reactiveVariables/gallery";

const GalleryLoadMoreBtn = () => {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={() => galleryCount(galleryCount() + 1)}
            >
                Load more
            </button>
        </div>
    );
}

export default GalleryLoadMoreBtn;