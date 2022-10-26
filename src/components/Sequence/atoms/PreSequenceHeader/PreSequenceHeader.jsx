import styles from "../PreSequenceHero/PreSequenceHero.module.css";

const PreSequenceHeader = ({randomHeader}) => {
    return (
        <>
            <p className={styles.harmony}>Harmony.</p>
            <p className={styles.random__header}>{randomHeader}</p>
        </>
    );
}

export default PreSequenceHeader;