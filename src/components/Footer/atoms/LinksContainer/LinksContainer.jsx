import styles from './LinksContainer.module.css';
import Link from "next/link";

const LinksContainer = ({title, links}) => {
    return (
        <div>
            <h3 className={styles.title}>{title}</h3>
            {
                links && links?.length
                ?
                    links.map(link => {
                       return (
                           <Link href={link?.link} passHref key={link?.id}>
                               <p className={styles.link}>{link?.text}</p>
                           </Link>
                       )
                    })
                :
                    <></>
            }
        </div>
    );
}

export default LinksContainer;