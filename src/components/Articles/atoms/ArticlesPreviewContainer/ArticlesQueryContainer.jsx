import {useQuery} from "@apollo/client";
import {GET_ARTICLES_PAGINATED} from "../../../../apolloClient/queries";
import ArticlesPreviewContainer from "./ArticlesPreviewContainer";
import ArticleLoadMore from "../ArticleLoadMore/ArticleLoadMore";
import React, {useRef} from "react";

const ArticlesQueryContainer = ({cursor}) => {
    const {data} = useQuery(GET_ARTICLES_PAGINATED, {
        variables: {
            endCursor: cursor
        },
        fetchPolicy: 'no-cache'
    });
    const articles = useRef([]);
    articles.current.push(data?.articlesConnection?.edges);
    const uniqueArticles = [...new Set(articles.current)].flat().filter(item => item);

    return (
        <>
            <ArticlesPreviewContainer
                articles={uniqueArticles}
            />
            {

                data?.articlesConnection?.pageInfo?.hasNextPage &&
                <ArticleLoadMore cursor={data?.articlesConnection?.pageInfo?.endCursor}/>
            }
        </>
    );
}

export default ArticlesQueryContainer;