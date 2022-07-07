import ArticlesList from "./ArticlesList";
import {useReactiveVar} from "@apollo/client";
import {currentArticles} from "../../../../apolloClient/reactiveVariables/articles";

const ArticlesPreviewContainer = ({currentFilter}) => {

    const articles = useReactiveVar(currentArticles);

    function filterArticles(filter, arr) {
        if (filter === 'Most popular') {
            return [...arr].sort((a,b) => b?.visionCount - a?.visionCount );
        }
        return arr
    }

    return (
        <ArticlesList articles={filterArticles(currentFilter, articles)}/>
    );
}

export default ArticlesPreviewContainer;