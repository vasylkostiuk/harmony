import styles from "../../../LayoutProduct/Atoms/LoadMoreBtn/LoadMoreBtn.module.css";
import {currentEndCursor} from "../../../../apolloClient/reactiveVariables/articles";
import LoadCircle from "../../../LoadCircle";
import React from "react";

const ArticleLoadMore = ({cursor, loading}) => {
    const content = loading ? <LoadCircle padding={'10px'}/> : "Load More"

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={() => currentEndCursor(cursor)}
            >
                {content}
            </button>
        </div>
    );
}

export default ArticleLoadMore;