import ArticlesFilterContainer
    from "../../src/components/Articles/molecules/ArticleFilterContainer/ArticlesFilterContainer";
import {useReactiveVar} from "@apollo/client";
import {currentEndCursor} from "../../src/apolloClient/reactiveVariables/articles";
import ArticlesQueryContainer
    from "../../src/components/Articles/atoms/ArticlesPreviewContainer/ArticlesQueryContainer";

const Articles = () => {
    const cursor = useReactiveVar(currentEndCursor)

    return (
        <div className="container">
            <ArticlesFilterContainer/>
            <ArticlesQueryContainer
                cursor={cursor}
            />
        </div>
    )
}

export default Articles;