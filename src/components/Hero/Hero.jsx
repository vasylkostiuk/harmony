import styles from './Hero.module.css';
import Image from "next/image";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.imageContainer}>
                <Image src='/image8.png' layout='fill' alt="Harmony Domes"/>
            </div>
            <div className='container'>
                <div className={styles.ctaContainer}>
                    <div className={styles.linkContainer}>
                        <a href="#" className={styles.link}>More</a>
                    </div>
                    <h1 className={styles.title}>Geodomes</h1>
                    <p className={styles.description}>
                        Harmony Domes will create the ideal space for you to live in harmony
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;