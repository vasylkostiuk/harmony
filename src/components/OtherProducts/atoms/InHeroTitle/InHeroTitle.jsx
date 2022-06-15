import styles from './InHeroTitle.module.css';

const InHeroTitle = () => {
    return (
        <>
            <h4 className={styles.subtitle}>Harmony.</h4>
            <div className={styles.line}></div>
            <h3 className={styles.title}>products</h3>
            <p className={styles.description}>
                Harmony Domes will create the ideal space for you to live in harmony – without any of the construction headaches.
            </p>
        </>
    );
}

export default InHeroTitle;