import {useReactiveVar} from "@apollo/client";
import {currentArticleFilter, mostPopularArr} from "../../../../apolloClient/reactiveVariables/articles";
import ArticlesList from "./ArticlesList";
import {useEffect} from "react";

const ArticlesPreviewContainer = ({articles}) => {
    const currentFilter = useReactiveVar(currentArticleFilter);
    const filteredArticles = useReactiveVar(mostPopularArr);

    useEffect(() => {
        if (currentFilter === 'Most popular') {
            mostPopularArr([...articles.sort((a,b) => b?.node?.visionCount - a?.node?.visionCount )]);
        }
    }, [currentFilter, articles])

    return (
        <ArticlesList articles={currentFilter === 'Most popular' ? filteredArticles : articles}/>
    );
}

export default ArticlesPreviewContainer;