import styles from '/src/components/Articles/atoms/ArticlePreview/ArticlePreview.module.css';
import SkeletonItem from "../../atoms/SkeletonItem/SkeletonItem";
import skeletonStyles from './ArticleSkeleton.module.css';

const ArticleSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={skeletonStyles.mobile}>
                <SkeletonItem width={'100%'} height={169} marginBottom={20}/>
            </div>
            <div className={skeletonStyles.desktop}>
                <SkeletonItem width={378} height={169} marginBottom={0}/>
            </div>
            <div className={styles.info__block}>
                <SkeletonItem width={200} height={20} marginBottom={15}/>
                <div className={skeletonStyles.mobile}>
                    <SkeletonItem width={'100%'} height={15} marginBottom={5}/>
                    <SkeletonItem width={'100%'} height={15} marginBottom={5}/>
                </div>
                <div className={skeletonStyles.desktop}>
                    <SkeletonItem width={'75%'} height={15} marginBottom={5}/>
                    <SkeletonItem width={'75%'} height={15} marginBottom={5}/>
                </div>
                <SkeletonItem width={250} height={15} marginBottom={15}/>
                <SkeletonItem width={100} height={20}/>
            </div>
        </div>
    );
}

export default ArticleSkeleton;