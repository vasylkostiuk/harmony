import React from "react";
import styles from './SequenceProof.module.css';
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence/Sequence";


const SequenceProofContainer = ({images}) => {
    return (
        <>
            <div className={styles.empty}></div>
            <Controller>
                <Scene duration="200%" triggerHook="onLeave" pin indicators>
                    {(progress) => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence progress={progress} images={images} />
                        </div>
                    )}
                </Scene>
            </Controller>
            <div className={styles.empty}></div>
        </>

    );
}

export default SequenceProofContainer;