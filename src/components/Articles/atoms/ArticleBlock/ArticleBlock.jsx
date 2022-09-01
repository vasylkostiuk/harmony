import styles from './ArticleBlock.module.css';
import Image from "next/image";

const ArticleBlock = ({imageSrc, title, description, type, height, width}) => {
    const gridStyling = type === 'Grid' ? styles.grid : '';

    return (
        <div className={`${styles.container} ${gridStyling}`}>
            {
                type !== 'Text' &&
                <img src={imageSrc} alt="Harmony Domes" style={{width: '100%', objectFit: 'contain'}}/>
            }
            <div className={styles.info__block}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}></p>
            </div>
        </div>
    );
}

export default ArticleBlock;