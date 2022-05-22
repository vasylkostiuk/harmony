import styles from './Badge.module.css';

const Badge = ({text}) => {
    return <p className={styles.badge}>{text}</p>
}

export default Badge;