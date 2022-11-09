import ReactPlayer from "react-player";
import {useState} from "react";
import useVideoController from "../../../../services/useVideoController";

const HeroVideo = ({url}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const {play, ref, controller} = useVideoController(isLoaded,false,true);

    return (
        <div ref={controller}>
            <div ref={ref}>
                <ReactPlayer
                    url={url}
                    className='react__player__long'
                    playsinline
                    playing={play}
                    muted
                    loop
                    width="100%"
                    height="100%"
                    onReady={() => {
                        setIsLoaded(true);
                    }}
                />
            </div>
        </div>
    );
}

export default HeroVideo;