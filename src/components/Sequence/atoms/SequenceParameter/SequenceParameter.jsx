import styles from './SequenceParameter.module.css';
import CountUp from "react-countup";
import { InView } from 'react-intersection-observer';

const SequenceParameter = ({title, value, measure}) => {
    function isInt(n) {
        return n % 1 === 0;
    }
    return (
        <div>
            <h5 className={styles.title}>{title}</h5>
            <div className={styles.value__container}>
                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <div ref={ref}>
                            {
                                inView
                                ?
                                <CountUp
                                    end={value}
                                    duration={2}
                                    decimals={isInt(value) ? 0 : 2}
                                    className={styles.value}
                                />
                                :
                                null
                            }
                        </div>
                    )}
                </InView>
                <p className={styles.measure}>{measure}</p>
            </div>
        </div>
    );
}

export default SequenceParameter;