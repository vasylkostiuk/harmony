import styles from './HubHero.module.css';
import Image from "next/image";
import customLoader from "../../../../preRender/customLoader";

const HubHero = ({title, imageSrc, width, height}) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <Image
                src={imageSrc}
                alt="Harmony Domes"
                loading='eager'
                loader={customLoader}
                placeholder='blur'
                blurDataURL={imageSrc}
                priority={true}
                width={width}
                height={height}
            />
        </>
    )
}

export default HubHero;