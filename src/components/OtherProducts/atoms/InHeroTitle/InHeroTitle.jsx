import styles from './InHeroTitle.module.css';

const InHeroTitle = ({title, preTitle, description}) => {
    return (
        <>
            <h4 className={styles.subtitle} dangerouslySetInnerHTML={{__html: preTitle}}></h4>
            <div className={styles.line}></div>
            <h3 className={styles.title} dangerouslySetInnerHTML={{__html: title}}></h3>
            <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}></p>
        </>
    );
}

export default InHeroTitle;