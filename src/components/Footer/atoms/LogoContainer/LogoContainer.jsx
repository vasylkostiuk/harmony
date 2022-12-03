import styles from './LogoContainer.module.css';
import Link from "next/link";

const LogoContainer = ({logo, description, socialLinks}) => {
    return (
      <div className={styles.container}>
          <div>
              <Link href={'/'} passHref>
                  <img src={logo} alt="Harmony domes" className={styles.logo}/>
              </Link>
              <p dangerouslySetInnerHTML={{__html: description}} className={styles.description}></p>
          </div>
          {
              socialLinks && socialLinks?.length
              ?
                <div className={styles.social__container}>
                    {
                        socialLinks.map(socialLink => {
                           return <a href={socialLink?.link} className={styles.social__link} key={socialLink?.id}>
                               <img src={socialLink?.icon?.url} className={styles?.social__icon} alt="Harmony domes"/>
                           </a>
                        })
                    }
                </div>
              :
              <></>
          }
      </div>
    );
}

export default LogoContainer;