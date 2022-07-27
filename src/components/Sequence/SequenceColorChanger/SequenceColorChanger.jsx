import React, {useState} from "react";
import styles from './SequenceColorChanger.module.css';
import {useReactiveVar} from "@apollo/client";
import {sequenceColors} from "../../../apolloClient/reactiveVariables/sequenceColors";

const SequenceColorChanger = ({isDisplayed}) => {
    const colors = useReactiveVar(sequenceColors);
    const [currentColor, setCurrentColor] = useState(0);

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
                                             style={{
                                                 objectFit: 'cover',
                                                 width: '100vw',
                                                 height: '100vh'
                                             }}
                                             alt="Harmony Domes"
                                        />
                                        <div className={styles.changer__container}>
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