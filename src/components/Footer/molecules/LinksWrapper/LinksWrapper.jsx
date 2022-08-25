import styles from './LinksWrapper.module.css';
import LinksContainer from "../../atoms/LinksContainer/LinksContainer";

const LinksWrapper = ({links}) => {
    return (
        <div className={styles.container}>
            {
                links && links?.length
                ?
                    links.map(link => {
                        return (
                            <LinksContainer key={link?.id} title={link?.title} links={link?.links} />
                        )
                    })
                :
                    <></>
            }
        </div>
    );
}

export default LinksWrapper;