import styles from './VideoPlayer.module.css';
import ReactPlayer from "react-player";
import {useState} from "react";
import VideoLink from "../VideoLink/VideoLink";
import useVideoController from "../../../../services/useVideoController";

const VideoPlayer = ({url, link, linkText}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    const {play, ref, controller} = useVideoController(isLoaded, isEnded);


    return (
        <div ref={controller} className={styles.container}>
            <div ref={ref}>
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
        </div>
    );
}

export default VideoPlayer;