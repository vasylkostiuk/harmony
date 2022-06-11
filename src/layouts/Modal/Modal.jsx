import styles from './Modal.module.css';

const Modal = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div style={{width: '100%', height: '100%', display: 'grid', placeItems: 'center'}}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;