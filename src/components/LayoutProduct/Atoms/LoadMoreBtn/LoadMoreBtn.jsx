import styles from './LoadMoreBtn.module.css';
import {paginationStepVar} from "../../../../apolloClient/reactiveVariables/products";

const LoadMoreBtn = ({paginationStep}) => {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={() => paginationStepVar(paginationStep + 1)}
            >
                Load more
            </button>
        </div>
    );
}

export default LoadMoreBtn;