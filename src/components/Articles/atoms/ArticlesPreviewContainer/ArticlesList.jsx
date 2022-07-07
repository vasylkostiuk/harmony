import ArticlePreview from "../ArticlePreview/ArticlePreview";
import React from "react";

const ArticlesList = ({articles}) => {
    return (
        <>
            {
                articles && articles?.length
                ?
                articles.map(article => {
                    return <ArticlePreview
                        key={article?.node?.id}
                        articleId={article?.node?.id}
                        imageSrc={article?.node?.presentationImage?.url}
                        width={article?.node?.presentationImage?.width}
                        height={article?.node?.presentationImage?.height}
                        description={article?.node?.description}
                        title={article?.node?.title}
                    />
                })
                :
                <></>
            }
        </>
    );
}

export default ArticlesList;