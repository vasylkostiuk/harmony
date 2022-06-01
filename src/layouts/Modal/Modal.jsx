import styles from './Modal.module.css';

const Modal = ({children}) => {
    let innerWidth, innerHeight = 0;
    if (typeof window !== 'undefined') {
        if (window.matchMedia('(min-width: 1919px)').matches) {
            innerWidth = window.innerWidth * 0.4;
            innerHeight = window.innerHeight * 0.65;
        } else if(window.matchMedia('(min-width: 1025px)').matches) {
            innerWidth = window.innerWidth * 0.475;
            innerHeight = window.innerHeight * 0.9;
        } else if (window.matchMedia('(min-width: 767px)').matches) {
            innerWidth = window.innerWidth - 30;
            innerHeight = window.innerHeight * 0.6;
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                {
                    typeof window !== 'undefined' &&
                    <div style={{width: innerWidth + 'px', height: innerHeight + 'px'}}>
                        {children}
                    </div>
                }
            </div>
        </div>
    );
}

export default Modal;