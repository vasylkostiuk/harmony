import {GET_ARTICLES_PAGINATED} from "../../../../apolloClient/queries";
import ArticlesPreviewContainer from "./ArticlesPreviewContainer";
import ArticleLoadMore from "../ArticleLoadMore/ArticleLoadMore";
import React, {useEffect, useState} from "react";
import {currentArticles} from "../../../../apolloClient/reactiveVariables/articles";
import {client} from "../../../../apolloClient/client";
import ArticleSkeleton from "../../molecules/ArticleSkeleton/ArticleSkeleton";
import {getUniqueById} from "../../../../services/getUniqueById";
import styles from "./ArticlesQueryContainer.module.css";

const ArticlesQueryContainer = ({cursor, filter}) => {
    const [hasNextPage, setHasNextPage] = useState(false);
    const [endCursor, setEndCursor] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)
        client.query({
            query: GET_ARTICLES_PAGINATED,
            variables: {
                endCursor: cursor
            },
            fetchPolicy: 'no-cache'
        }).then(res => {
            setHasNextPage(res?.data?.articlesConnection?.pageInfo?.hasNextPage)
            setEndCursor(res?.data?.articlesConnection?.pageInfo?.endCursor)
            currentArticles(getUniqueById([...currentArticles()].concat(res?.data?.articlesConnection?.edges.map(item => item.node))));
            setLoading(false);
        })
    }, [cursor]);

    return (
        <>
            <ArticlesPreviewContainer
                currentFilter={filter}
            />
            {
                loading
                ?
                [1,2,3,4,5].map(item => {
                    return <ArticleSkeleton key={item}/>
                })
                :
                <></>
            }
            {
                hasNextPage
                ?
                    <ArticleLoadMore cursor={endCursor} loading={loading}/>
                :
                    <div className={styles.footer__margin}></div>
            }
        </>
    );
}

export default ArticlesQueryContainer;