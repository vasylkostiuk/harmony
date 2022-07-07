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
                        key={article?.id}
                        articleId={article?.id}
                        imageSrc={article?.presentationImage?.url}
                        width={article?.presentationImage?.width}
                        height={article?.presentationImage?.height}
                        description={article?.description}
                        title={article?.title}
                    />
                })
                :
                <></>
            }
        </>
    );
}

export default ArticlesList;