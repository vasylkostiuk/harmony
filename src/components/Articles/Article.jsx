import ArticleHeading from "./atoms/ArticleHeading/ArticleHeading";
import ArticleBlock from "./atoms/ArticleBlock/ArticleBlock";
import HeadGenerator from "../global/HeadGenerator/HeadGenerator";

const Article = ({article}) => {
    const {title, description, type, blocks, seoDescription, seoKeywords, seoTitle} = article;

    return (
        <>
            <HeadGenerator title={seoTitle} description={seoDescription} keywords={seoKeywords}/>
            <ArticleHeading
                title={title}
                description={description}
            />
            {
                blocks && blocks?.length
                ?
                blocks.map(block => {
                    return <ArticleBlock
                        key={block.id}
                        title={block.title}
                        description={block.description}
                        type={type}
                        imageSrc={block?.image?.url}
                        height={block?.image?.height}
                        width={block?.image?.width}
                    />
                })
                :
                <></>
            }
        </>
    );
}

export default Article;