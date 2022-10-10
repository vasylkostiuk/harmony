import styles from './VideoPlayer.module.css';
import ReactPlayer from "react-player";
import {useEffect, useRef, useState} from "react";
import VideoLink from "../VideoLink/VideoLink";

const VideoPlayer = ({url, progress, link, linkText}) => {
    const [play, setPlay] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    const controller = useRef(null);

    useEffect(() => {
       setPlay(false);
       if (controller?.current && isLoaded && progress > .2 && !isEnded) {
           setPlay(true);
       }
    }, [controller, isLoaded, progress]);


    return (
        <div ref={controller} className={styles.container}>
            <ReactPlayer
                url={url}
                className='react-player'
                playing={play}
                muted
                width="100%"
                height="100%"
                onReady={() => {
                    setIsLoaded(true);
                }}
                onEnded={() => {
                    setIsEnded(true);
                }}
            />
            {
                isEnded &&
                <VideoLink link={link} linkText={linkText}/>
            }
        </div>
    );
}

export default VideoPlayer;