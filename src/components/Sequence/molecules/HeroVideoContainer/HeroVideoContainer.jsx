import styles from './HeroVideoContainer.module.css';
import HeroVideo from "../../atoms/HeroVideo/HeroVideo";
import {useRef} from "react";

const HeroVideoContainer = ({heroVideo}) => {
    const block = useRef(null);

    function executeScroll() {
        return block.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div ref={block} className={styles.container}>
            <div className="container">
                <p className={styles.title}>{heroVideo?.title}</p>
                <p className={styles.description}>{heroVideo?.description}</p>
            </div>
            <HeroVideo url={heroVideo?.video?.url}/>
            <div className={styles.button__container} onClick={() => executeScroll()}>
                <p className={styles.button__text}>{heroVideo?.buttonText}</p>
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.button__svg} d="M1.27344 1.10547L7.25344 6.85547L13.7318 1.10547" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    );
}

export default HeroVideoContainer;