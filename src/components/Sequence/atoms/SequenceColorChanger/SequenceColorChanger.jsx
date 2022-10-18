import React, {useEffect, useState} from "react";
import styles from './SequenceColorChanger.module.css';
import {Tween} from "react-gsap";

const SequenceColorChanger = ({isDisplayed, colors}) => {
    const [currentColor, setCurrentColor] = useState(0);

    useEffect(() => {
        if (!isDisplayed) {
            setCurrentColor(0);
        }
    }, [isDisplayed]);

    return (
        <>
            {
                isDisplayed
                ?
                <div className={styles.container}>
                    {
                        colors.map((c, idx) => {
                            return (
                                <React.Fragment key={c?.id}>
                                    <div style={{display: idx === currentColor ? 'block' : 'none'}}>
                                        <img src={c?.image?.url}
                                             loading="eager"
                                             className={styles.image}
                                             alt="Harmony Domes"
                                        />
                                        <div className={styles.changer__container}>
                                            <Tween from={{opacity: 0}} to={{opacity: 1}} stagger={.05}>
                                                <p className={styles.color__choose}>Choose your colour.</p>
                                                <div className={styles.line}></div>
                                                <p className={styles.title}>{c?.title}</p>
                                                <p className={styles.description}>{c?.description}</p>
                                                <div className={styles.changer__color_container}>
                                                    {
                                                        colors.map((c, idx) => {
                                                            return (
                                                                <div key={c?.id}
                                                                     className={`${styles.changer__color_wrapper} ${idx === currentColor ? styles.current : ''}`}
                                                                     onClick={() => setCurrentColor(idx)}
                                                                >
                                                                    <div
                                                                        style={
                                                                            {
                                                                                backgroundColor: c?.color?.hex
                                                                            }
                                                                        }
                                                                        className={styles.changer__color}
                                                                    >
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </Tween>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                :
                <></>
            }
        </>
    )
}

export default SequenceColorChanger;