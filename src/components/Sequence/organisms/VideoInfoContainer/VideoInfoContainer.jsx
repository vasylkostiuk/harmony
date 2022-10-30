import HeroVideoContainer from "../../molecules/HeroVideoContainer/HeroVideoContainer";
import SequenceInfo from "../../atoms/SequenceInfo/SequenceInfo";
import {useRef} from "react";

const VideoInfoContainer = ({heroVideo, info}) => {
    const block = useRef(null);
    function executeScroll() {
        return block.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            <HeroVideoContainer heroVideo={heroVideo} executeScroll={executeScroll}/>
            <div ref={block}>
                <SequenceInfo sequenceInfo={info}/>
            </div>
        </>
    );
}

export default VideoInfoContainer;