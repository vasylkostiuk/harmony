import styles from './TwoColumns.module.css';

const TwoColumns = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default TwoColumns;