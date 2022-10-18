import styles from './SequenceParametersOrganism.module.css';
import Image from "next/image";
import SequenceParametersContainer from "../../molecules/SequenceParametersContainer/SequenceParametersContainer";

const SequenceParametersOrganism = ({parametersSection}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image__container}>
                <Image
                    src={parametersSection?.firstImage?.url}
                    width={parametersSection?.firstImage?.width}
                    height={parametersSection?.firstImage?.height}
                    placeholder="blur"
                    blurDataURL={parametersSection?.firstImage?.url}
                    alt="Harmony Domes"
                />
                <Image
                    src={parametersSection?.secondImage?.url}
                    width={parametersSection?.secondImage?.width}
                    height={parametersSection?.secondImage?.height}
                    placeholder="blur"
                    blurDataURL={parametersSection?.secondImage?.url}
                    alt="Harmony Domes"
                />
            </div>
            <SequenceParametersContainer parameters={parametersSection?.parameter} title={parametersSection?.title}/>
        </div>
    );
}

export default SequenceParametersOrganism;