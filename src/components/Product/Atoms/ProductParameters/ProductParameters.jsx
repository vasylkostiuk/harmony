import styles from './ProductParameters.module.css';

const ProductParameters = ({parameters}) => {
    return (
        <div className={styles.container}>
            {
                parameters?.length
                ?
                parameters.map((param) => {
                    return (
                        <div className={styles.item} key={param?.id}>
                            <img src={param?.icon?.url} alt="Harmony Domes" className={styles.icon}/>
                            <p className={styles.text}> {param?.title} {param?.value}</p>
                        </div>
                    )
                })
                :
                <></>
            }
        </div>
    );
}

export default ProductParameters;