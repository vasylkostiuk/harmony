import ArticlesFilterContainer
    from "../../src/components/Articles/molecules/ArticleFilterContainer/ArticlesFilterContainer";
import {useReactiveVar} from "@apollo/client";
import {currentArticleFilter, currentEndCursor} from "../../src/apolloClient/reactiveVariables/articles";
import ArticlesQueryContainer
    from "../../src/components/Articles/atoms/ArticlesPreviewContainer/ArticlesQueryContainer";

const Articles = () => {
    const cursor = useReactiveVar(currentEndCursor);
    const currentFilter = useReactiveVar(currentArticleFilter);

    return (
        <div className="container">
            <ArticlesFilterContainer/>
            <ArticlesQueryContainer
                cursor={cursor}
                filter={currentFilter}
            />
        </div>
    )
}

export default Articles;