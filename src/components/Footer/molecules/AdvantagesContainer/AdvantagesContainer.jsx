import styles from './AdvantagesContainer.module.css';
import FooterAdvantage from "../../atoms/FooterAdvantage/FooterAdvantage";

const AdvantagesContainer = ({advantages}) => {
    return (
        <div className={styles.container__color}>
            <div className="container">
                <div className={styles.container}>
                    {
                        advantages?.map(advantage =>{
                            return <FooterAdvantage
                                key={advantage?.id}
                                icon={advantage?.image?.url}
                                link={advantage?.link}
                                title={advantage?.title}
                                description={advantage?.description}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default AdvantagesContainer;