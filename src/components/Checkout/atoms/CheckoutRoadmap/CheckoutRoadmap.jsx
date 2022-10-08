import styles from './CheckoutRoadmap.module.css';

const CheckoutRoadmap = ({isFinal}) => {
    return (
        <div className={styles.container}>
           <div className={styles.item__container}>
               <svg className={styles.square} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect width="31" height="31" fill="black"/>
                   <path d="M23 10L12 21L7 16" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
               </svg>
               <p className={`${styles.title} ${styles.black}`}>Cart</p>
           </div>
           <div className={`${styles.line} ${styles.black}`}></div>
            <div className={styles.item__container}>
                {
                    isFinal
                    ?
                    <svg className={styles.square} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="31" height="31" fill="black"/>
                        <path d="M23 10L12 21L7 16" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                    </svg>
                    :
                    <p className={`${styles.number} ${styles.black} ${styles.square}`}>2</p>
                }
                <p className={`${styles.title} ${styles.black}`}>Order</p>
            </div>
            <div className={`${styles.line} ${isFinal ? styles.black : styles.gray}`}></div>
            <div className={styles.item__container}>
                <p className={`${styles.number} ${isFinal ? styles.black : styles.gray} ${styles.square}`}>3</p>
                <p className={`${styles.title} ${isFinal ? styles.black : styles.gray}`}>Contact information</p>
            </div>
        </div>
    )
}

export default CheckoutRoadmap;