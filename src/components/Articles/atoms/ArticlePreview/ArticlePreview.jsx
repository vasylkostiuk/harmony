import styles from './ArticlePreview.module.css';
import Image from "next/image";
import Link from "next/link";

const ArticlePreview = ({imageSrc, width, height, title, description, articleId}) => {
    return (
        <Link href={`articles/${articleId}`} passHref>
            <div className={styles.container}>
                <Image
                    src={imageSrc}
                    width={width}
                    height={height}
                    placeholder='blur'
                    blurDataURL={imageSrc}
                    loading='lazy'
                    alt={'Harmony Domes'}
                />
                <div className={styles.info__block}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>

                    <div className={styles.link__container}>
                        <p className={styles.link}>Read</p>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5.16L1 9.66667" stroke="black" strokeWidth="1.5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ArticlePreview;