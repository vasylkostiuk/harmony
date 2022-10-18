import styles from './SequenceParameterContainer.module.css';
import SequenceParameter from "../../atoms/SequenceParameter/SequenceParameter";

const SequenceParametersContainer = ({parameters, title}) => {
    return (
        <div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.container}>
                {
                    parameters?.length && parameters.map(param => {
                        return <SequenceParameter
                            key={param?.id}
                            value={param?.value}
                            title={param?.title}
                            measure={param?.unitOfMeasurement}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default SequenceParametersContainer;