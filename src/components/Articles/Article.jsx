import ArticleHeading from "./atoms/ArticleHeading/ArticleHeading";
import ArticleBlock from "./atoms/ArticleBlock/ArticleBlock";

const Article = ({article}) => {
    const {title, description, type, blocks} = article;

    return (
        <>
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