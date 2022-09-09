import styles from './ErrorBanner.module.css';
import {useEffect, useRef, useState} from "react";

const ErrorBanner = ({
                         title = "Error",
                         description = "Error of email sending. Please, try again later.",
                         isPositive = false,
                         isDisplayed = false
}) => {
    const mainColor = isPositive ? '#12C39A' : '#DB2424';
    const [showBanner, setShowBanner] = useState(false);
    const isRendered = useRef(false);

    const notificationController = {
        startTimer() {
            this.timeoutId = setTimeout(() => {
                setShowBanner(false)
            }, 4000)
            return this.timeoutId;
        },
        clearTimeout() {
            clearTimeout(this.timeoutId);
        },
        closeBannerManually() {
            this.clearTimeout()
            setShowBanner(false);
        }
    }

    useEffect(() => {
        if (!isRendered.current) {
            isRendered.current = true;

            return;
        }

        setShowBanner(true);
        notificationController.startTimer();
    }, [isDisplayed]);

    return showBanner ? (
        <div className={styles.container}>
            <div className={styles.container__inner}>
                <div className={styles.color__banner} style={{backgroundColor: mainColor}}></div>
                <div className={styles.info__container}>
                    <svg className={styles.icon} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.6895" cy="12" r="11" stroke={mainColor} strokeWidth="2"/>
                        <path d="M17.9361 9.23828L11.3145 15.8599L8.30469 12.8501" stroke={mainColor} strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"/>
                    </svg>
                    <div>
                        <h5 className={styles.title}>{title}</h5>
                        <p className={styles.subtitle}>{description}</p>
                    </div>
                </div>
                <svg className={styles.cross}
                     onClick={() => notificationController.closeBannerManually()}
                     style={{cursor: 'pointer'}}
                     width="12"
                     height="13"
                     viewBox="0 0 12 13"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1.25977 11.6055L11.3318 0.998867" stroke="#C3CBCD" strokeWidth="1.5"/>
                    <path d="M11.3301 11.6055L1.25803 0.998867" stroke="#C3CBCD" strokeWidth="1.5"/>
                </svg>
            </div>
        </div>
    ) : null;
}

export default ErrorBanner;