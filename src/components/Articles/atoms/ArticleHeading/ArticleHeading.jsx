import styles from './ArticleHeading.module.css';

const ArticleHeading = ({title, description}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}

export default ArticleHeading;