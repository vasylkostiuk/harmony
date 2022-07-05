import styles from './ArticleBlock.module.css';
import Image from "next/image";

const ArticleBlock = ({imageSrc, title, description, type, height, width}) => {
    const gridStyling = type === 'Grid' ? styles.grid : '';

    return (
        <div className={`${styles.container} ${gridStyling}`}>
            {
                type !== 'Text' &&
                <Image
                    src={imageSrc}
                    width={width}
                    height={height}
                    placeholder='blur'
                    blurDataURL={imageSrc}
                    loading='lazy'
                    alt={'Harmony Domes'}
                />
            }
            <div className={styles.info__block}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}></p>
            </div>
        </div>
    );
}

export default ArticleBlock;