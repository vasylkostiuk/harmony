import styles from './MobileGif.module.css';

const MobileGif = ({url}) => {
    return (
        <img src={url} className={styles.image} alt={'Harmony Domes'}/>
    );
}

export default MobileGif;