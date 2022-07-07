import styles from "../../../LayoutProduct/Atoms/LoadMoreBtn/LoadMoreBtn.module.css";
import {currentEndCursor} from "../../../../apolloClient/reactiveVariables/articles";

const ArticleLoadMore = ({cursor}) => {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={() => currentEndCursor(cursor)}
            >
                Load more
            </button>
        </div>
    );
}

export default ArticleLoadMore;