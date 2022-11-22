import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "../Sequence/Sequence";
import SequenceColorChangerContainer from "../../atoms/SequenceColorChanger/SequenceColorChangerContainer";


const SequenceContainer = ({images}) => {
    return (
        <Controller>
            <Scene duration="2000%" triggerHook="onLeave" pin>
                {(progress) => (
                    <div style={{ height: "100vh", position: "relative" }}>
                        <Sequence progress={progress} images={images} />
                        <SequenceColorChangerContainer isDisplayed={progress > .99} isDesktop={true}/>
                    </div>
                )}
            </Scene>
        </Controller>
    );
}

export default SequenceContainer;