import styles from './SequenceAdvantages.module.css';
import SequenceAdvantageItem from "../../atoms/SequenceAdvantageItem/SequenceAdvantageItem";

const SequenceAdvantages = ({firstImage, secondImage, advantages, title}) => {
    return (
        <div className="container">
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
                <img className={styles.image__first} src={firstImage?.url} alt="Harmony Domes"/>
                <img className={styles.image__second} src={secondImage?.url} alt="Harmony Domes"/>
                <div className={styles.advantages__first}>
                    {
                        advantages?.length
                            ?
                            advantages.slice(0,3).map((item) => {
                                return <div key={item?.id}>
                                    <SequenceAdvantageItem
                                        advantage={item}
                                    />
                                </div>
                            })
                            :
                            <></>
                    }
                </div>
                <div className={styles.advantages__second}>
                    {
                        advantages?.length
                            ?
                            advantages.slice(3,6).map((item) => {
                                return <div key={item?.id}>
                                    <SequenceAdvantageItem
                                        advantage={item}
                                    />
                                </div>
                            })
                            :
                            <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default SequenceAdvantages;