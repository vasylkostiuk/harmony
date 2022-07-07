import titleStyle from '/src/components/LayoutProduct/LayoutProductContainer.module.css';
import styles from './ArticlesFilterContainer.module.css';
import {useState} from "react";
import {useReactiveVar} from "@apollo/client";
import {currentArticleFilter} from "../../../../apolloClient/reactiveVariables/articles";

const filterArr = ['Recent news' , 'Most popular'];

const ArticlesFilterContainer = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const currentFilter = useReactiveVar(currentArticleFilter);

    return (
        <div className={styles.container}>
            <h1 className={titleStyle.title}>Our news</h1>
            <div className={styles.filter__container} onClick={() => setShowDropdown(!showDropdown)}>
                <p className={styles.text}>{currentFilter}</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66406 6.33203L7.82406 10.332L12.3307 6.33203" stroke="black" strokeWidth="1.5"/>
                </svg>
                <div className={styles.dropdown}>
                    {
                        showDropdown &&
                        filterArr.map(item => {
                            return <p
                                key={item}
                                className={`${styles.item} ${currentFilter === item ? styles.current : ''}`}
                                onClick={() => currentArticleFilter(item)}
                            >
                                {item}
                            </p>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ArticlesFilterContainer;