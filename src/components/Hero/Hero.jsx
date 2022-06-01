import styles from './Hero.module.css';
import Image from "next/image";

const Hero = ({image, name, description, link, linkText}) => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.imageContainer}>
                    <Image
                        src={image?.url}
                        layout='fill'
                        alt="Harmony Domes"
                        placeholder='blur'
                        loading='eager'
                        priority={true}
                        blurDataURL={image?.url}
                    />
                </div>
                <div className='container'>
                    <div className={styles.ctaContainer}>
                        <a href={link} className={styles.linkContainer}>
                            <p className={styles.link}>{linkText}</p>
                            <svg className={styles.svg} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7.24L1 14" stroke="black" strokeWidth="2"/>
                            </svg>
                        </a>
                        <h1 className={styles.title}>{name}</h1>
                        <p className={styles.description}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.responsive}>
                <div className='container'>
                    <div className={styles.ctaContainer}>
                        <a href={link} className={styles.linkContainer}>
                            <p className={styles.link}>{linkText}</p>
                            <svg className={styles.svg} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7.24L1 14" stroke="black" strokeWidth="2"/>
                            </svg>
                        </a>
                        <h1 className={styles.title}>{name}</h1>
                        <p className={styles.description}>
                            {description}
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src={image?.url}
                            width={1920}
                            height={1080}
                            alt="Harmony Domes"
                            placeholder='blur'
                            loading='eager'
                            priority={true}
                            blurDataURL={image?.url}
                        />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Hero;