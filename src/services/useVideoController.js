import {useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";

const useVideoController = (isLoaded, isEnded = false, isLoop = false) => {
    const [play, setPlay] = useState(false);
    const controller = useRef(null);

    const playOnce = () => {
        setPlay(false);
        if (controller?.current && isLoaded && inView && !isEnded) {
            setPlay(true);
        }
    }

    const playOnRepeat = () => {
        if (controller?.current && isLoaded && inView ) {
            setPlay(true);
        }
    }

    const playing = () => {
        if (isLoop) {
            return playOnRepeat();
        }
        return playOnce();
    }

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    useEffect(() => {
        playing();
    }, [controller, isLoaded, inView]);
    return {play, ref, controller};
}

export default useVideoController;