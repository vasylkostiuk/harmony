import styles from './FooterAdvantage.module.css';

const FooterAdvantage = ({title, description, icon}) => {
    return (
        <div className={styles.container}>
            <img src={icon} alt="Harmony domes" className={styles.icon}/>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default FooterAdvantage;