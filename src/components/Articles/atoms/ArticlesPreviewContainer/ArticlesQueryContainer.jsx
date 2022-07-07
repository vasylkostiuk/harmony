import {GET_ARTICLES_PAGINATED} from "../../../../apolloClient/queries";
import ArticlesPreviewContainer from "./ArticlesPreviewContainer";
import ArticleLoadMore from "../ArticleLoadMore/ArticleLoadMore";
import React, {useEffect, useState} from "react";
import {currentArticles} from "../../../../apolloClient/reactiveVariables/articles";
import {client} from "../../../../apolloClient/client";

const ArticlesQueryContainer = ({cursor, filter}) => {
    const [hasNextPage, setHasNextPage] = useState(false);
    const [endCursor, setEndCursor] = useState(null);


    useEffect(() => {
        client.query({
            query: GET_ARTICLES_PAGINATED,
            variables: {
                endCursor: cursor
            },
            fetchPolicy: 'no-cache'
        }).then(res => {
            setHasNextPage(res?.data?.articlesConnection?.pageInfo?.hasNextPage)
            setEndCursor(res?.data?.articlesConnection?.pageInfo?.endCursor)
            currentArticles([...currentArticles()].concat(res?.data?.articlesConnection?.edges.map(item => item.node)))
        })
    }, [cursor]);

    return (
        <>
            <ArticlesPreviewContainer
                currentFilter={filter}
            />
            {
                hasNextPage &&
                <ArticleLoadMore cursor={endCursor}/>
            }
        </>
    );
}

export default ArticlesQueryContainer;