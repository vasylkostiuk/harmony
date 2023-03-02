import styles from './ErrorPage.module.css';
import Link from "next/link";

const defaults = {
    title: "Ooops, page not found...",
    description: "404",
    message: "Sorry, the page was not found, please make sure you type correct URL",
}

const ErrorPage = ({
                       title = defaults.title,
                       description = defaults.description,
                       message = defaults.message
}) => {
    return (
        <div>
            <Link href={'/'} passHref>
                <svg className={styles.icon} width="139" height="27" viewBox="0 0 139 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 23.7931V9.2069H27.4261V15.2897H34.3063V9.2069H36.7323V23.7931H34.3063V17.5034H27.4261V23.7931H25Z" fill="black"/>
                    <path d="M38.219 23.7931L44.2653 9.2069H46.2554L52.3016 23.7931H49.8377L48.5109 20.4207H41.9908L40.683 23.7931H38.219ZM45.2319 12.0828L42.8248 18.3103H47.6769L45.2698 12.0828H45.2319Z" fill="black"/>
                    <path d="M53.7637 23.7931V9.2069H59.5636C61.0293 9.2069 62.1602 9.5931 62.9563 10.3655C63.7523 11.1241 64.1504 12.1931 64.1504 13.5724C64.1504 14.6621 63.8913 15.5655 63.3733 16.2828C62.8552 16.9862 62.1097 17.4621 61.1367 17.7103C61.7812 17.931 62.3119 18.4621 62.7288 19.3034L64.9654 23.7931H62.2929L59.9806 19.1379C59.7531 18.6828 59.4814 18.3724 59.1655 18.2069C58.8623 18.0414 58.4706 17.9586 57.9904 17.9586H56.1898V23.7931H53.7637ZM56.1898 15.9931H59.1466C60.9156 15.9931 61.8001 15.2069 61.8001 13.6345C61.8001 12.0759 60.9156 11.2966 59.1466 11.2966H56.1898V15.9931Z" fill="black"/>
                    <path d="M66.7953 23.7931V9.2069H68.8233L73.5618 18.7448L78.2812 9.2069H80.2714V23.7931H78.0728V13.9655L74.2441 21.5793H72.8226L68.9939 14.0069V23.7931H66.7953Z" fill="black"/>
                    <path d="M89.2017 24C87.9128 24 86.7819 23.6897 85.809 23.069C84.8487 22.4483 84.1031 21.5793 83.5724 20.4621C83.0417 19.331 82.7764 18.0069 82.7764 16.4897C82.7764 14.9586 83.0417 13.6345 83.5724 12.5172C84.1031 11.4 84.8487 10.5379 85.809 9.93103C86.7693 9.31034 87.9002 9 89.2017 9C90.5032 9 91.6341 9.31034 92.5944 9.93103C93.5547 10.5379 94.3002 11.4 94.8309 12.5172C95.3616 13.6345 95.627 14.9517 95.627 16.469C95.627 18 95.3616 19.331 94.8309 20.4621C94.3002 21.5793 93.5547 22.4483 92.5944 23.069C91.6341 23.6897 90.5032 24 89.2017 24ZM89.2017 21.7241C90.4274 21.7241 91.3814 21.2621 92.0637 20.3379C92.746 19.4138 93.0872 18.131 93.0872 16.4897C93.0872 14.8345 92.746 13.5517 92.0637 12.6414C91.394 11.731 90.44 11.2759 89.2017 11.2759C87.976 11.2759 87.022 11.731 86.3397 12.6414C85.6573 13.5517 85.3162 14.8345 85.3162 16.4897C85.3162 18.131 85.6573 19.4138 86.3397 20.3379C87.022 21.2621 87.976 21.7241 89.2017 21.7241Z" fill="black"/>
                    <path d="M98.0939 23.7931V9.2069H99.9135L107.097 19.3862V9.2069H109.352V23.7931H107.552L100.349 13.5724V23.7931H98.0939Z" fill="black"/>
                    <path d="M115.456 23.7931V17.0897L110.32 9.2069H113.144L116.707 14.731L120.29 9.2069H123L117.882 17.1103V23.7931H115.456Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.9729 5L16.1567 13.3039V19.049H13.4639V14.4078L7.99935 8.86304L2.69278 14.397V21.7418H9.42474V24.4346H0V13.3146L7.9729 5Z" fill="black"/>
                    <path d="M13.4639 21.7417H16.1567V24.4345H13.4639V21.7417Z" fill="black"/>
                </svg>
            </Link>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.info__container}>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.message}>{message}</p>
                    <Link href={'/'} passHref>
                        <div className={styles.link__container}>
                            <p className={styles.link}>Main page</p>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5.16L1 9.66667" stroke="#18181B" strokeWidth="1.5"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;