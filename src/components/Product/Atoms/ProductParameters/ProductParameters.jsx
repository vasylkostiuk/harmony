import styles from './ProductParameters.module.css';

const ProductParameters = ({area, diameter, maxHeight, weight}) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_417_3291" fill="white">
                        <rect x="5" y="5" width="26" height="26" rx="1"/>
                    </mask>
                    <rect x="5" y="5" width="26" height="26" rx="1" stroke="black" stroke-width="3" mask="url(#path-1-inside-1_417_3291)"/>
                    <path d="M10.3563 10.7882L25.5622 25.994M10.3563 10.7882L10.3155 14.0303M10.3563 10.7882L13.5985 10.7473M25.5622 25.994L22.3201 26.0349M25.5622 25.994L25.6031 22.7519" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className={styles.text}> Area: {area} m2</p>
            </div>
            <div className={styles.item}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="10.25" stroke="black" stroke-width="1.5"/>
                    <path d="M29.3359 6L6.00141 29.3345" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className={styles.text}> Diameter: {diameter} m</p>
            </div>
            <div className={styles.item}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 11V27M18.5 11L16 12.6842M18.5 11L21 12.6842M18.5 27L16 25.3158M18.5 27L21 25.3158" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="5.75" y1="5.25" x2="31.25" y2="5.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="5.75" y1="32.25" x2="31.25" y2="32.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className={styles.text}> Maximum Height: {maxHeight} m</p>
            </div>
            <div className={styles.item}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0127 4C20.7337 4 23.1163 5.44903 24.4308 7.61754C25.9056 7.87004 27.4807 8.20154 29.1551 8.61143C30.9194 9.04332 32.1888 10.7139 31.9936 12.6397L30.2871 29.1359C30.0952 30.9911 28.5189 32.5 26.557 32.5H9.46831C7.60316 32.5 5.98964 31.1459 5.73822 29.1359L4.03172 12.6397C3.83898 10.7765 4.49269 9.19341 6.87019 8.61143C8.45519 8.22344 10.0299 7.89214 11.5945 7.61754C12.909 5.44903 15.2916 4 18.0127 4ZM10.8478 9.2764C9.17175 9.62377 7.96477 9.88777 7.22684 10.0684C6.17883 10.3249 5.44345 11.2795 5.52376 12.4854L7.23026 28.9815C7.34434 30.0843 8.30628 31 9.46831 31H26.557C27.6656 31 28.6519 30.1348 28.795 28.9815L30.5015 12.4854C30.6172 11.3675 29.8901 10.3356 28.7985 10.0684C27.8105 9.82657 26.6036 9.56282 25.1778 9.27716C25.401 9.97368 25.5127 10.7146 25.5127 11.5C25.5127 15.6421 22.1548 19 18.0127 19C13.8705 19 10.5127 15.6421 10.5127 11.5C10.5127 10.7101 10.6244 9.96891 10.8478 9.2764ZM18.0127 5.5C14.7256 5.5 12.0127 8.18629 12.0127 11.5C12.0127 14.8137 14.6989 17.5 18.0127 17.5C21.3264 17.5 24.0127 14.8137 24.0127 11.5C24.0127 8.18629 21.2997 5.5 18.0127 5.5ZM18.0127 7C18.3973 7 18.7627 7.33525 18.7627 7.75V11.5C18.7627 11.9142 18.4269 12.25 18.0127 12.25C17.628 12.25 17.2627 11.961 17.2627 11.5V7.75C17.2627 7.33579 17.5984 7 18.0127 7Z" fill="black"/>
                </svg>
                <p className={styles.text}> weight: {weight} kg</p>
            </div>
        </div>
    );
}

export default ProductParameters;