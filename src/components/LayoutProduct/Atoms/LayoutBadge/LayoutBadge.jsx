import styles from './LayoutBadge.module.css';

const LayoutBadge = ({text}) => {
    return <p className={styles.badge}>{text}</p>
}

export default LayoutBadge;