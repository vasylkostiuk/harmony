import styles from './BottomWidget.module.css';

const BottomWidget = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default BottomWidget;