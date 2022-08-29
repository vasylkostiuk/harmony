import styles from './FAQs.module.css';
import QAItem from "./atoms/QAItem/QAItem";

const FAQs = ({title, qas}) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.faqs__container}>
                {
                    qas && qas.length
                    ?
                        qas.map(qa => {
                            return <QAItem question={qa?.question} answer={qa?.answer} key={qa?.id}/>
                        })
                    :
                        <></>
                }
            </div>
        </>
    );
}

export default FAQs;