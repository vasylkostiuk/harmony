import styles from './QAItem.module.css';
import {useState} from "react";

const QAItem = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.title__container} onClick={() => setShowAnswer(!showAnswer)}>
                <p className={styles.title}>{question}</p>
                <svg className={`${styles.icon} ${showAnswer ? styles.opened : ''}`} width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33594 1.66797L9.65594 9.66797L18.6693 1.66797" stroke="white" strokeWidth="3"/>
                </svg>
            </div>
            {
                showAnswer
                ?
                    <p className={styles.text} dangerouslySetInnerHTML={{__html: answer}}></p>
                :
                    <></>
            }
        </div>
    );
}

export default QAItem;