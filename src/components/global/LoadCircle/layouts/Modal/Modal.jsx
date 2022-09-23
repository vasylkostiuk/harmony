import styles from './Modal.module.css';

const Modal = ({children, showModal = true, closeCallback}) => {
    return showModal ? (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div style={{width: '100%', height: '100%', display: 'grid', placeItems: 'center'}}>
                    {children}
                </div>
            </div>
            <svg
                className={styles.cross}
                onClick={() => closeCallback()}
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2 18.9707L18.9706 2.00014" stroke="black" strokeWidth="3"/>
                <path d="M18.9688 18.9707L1.99819 2.00014" stroke="black" strokeWidth="3"/>
            </svg>
        </div>
    ) : null;
}

export default Modal;