import Image from "next/image";
import styles from "./PreSequenceHero.module.css";
import {useRef} from "react";

const PreSequenceHero = ({imageSrc, width, height, title, description, randomHeader}) => {
    const bottomHeader = useRef(null);

    function executeScroll() {
        return bottomHeader.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.more__container} onClick={() => executeScroll()}>
                <p className={styles.more__text}>{description}</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3307 8.00033L14.0382 6.70783L8.91406 11.8228V0.666992H7.08073V11.8228L1.96573 6.69866L0.664062 8.00033L7.9974 15.3337L15.3307 8.00033Z" fill="#18181B"/>
                </svg>
            </div>
            <Image
                src={imageSrc}
                width={width}
                height={height}
                alt="Harmony Domes"
            />
            <p className={styles.harmony}>Harmony.</p>
            <p ref={bottomHeader} className={styles.random__header}>{randomHeader}</p>
        </div>
    );
}

export default PreSequenceHero;