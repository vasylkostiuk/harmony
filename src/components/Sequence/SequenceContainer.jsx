import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import SequenceColorChanger from "./SequenceColorChanger/SequenceColorChanger";


const SequenceContainer = ({images}) => {
    return (
        <Controller>
            <Scene duration="500%" triggerHook="onLeave" pin>
                {(progress) => (
                    <div style={{ height: "100vh", position: "relative" }}>
                        <Sequence progress={progress} images={images} />
                        <SequenceColorChanger isDisplayed={progress > .99}/>
                    </div>
                )}
            </Scene>
        </Controller>
    );
}

export default SequenceContainer;