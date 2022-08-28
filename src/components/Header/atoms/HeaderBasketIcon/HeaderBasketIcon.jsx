import styles from './HeaderBasketIcon.module.css';
import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {useReactiveVar} from "@apollo/client";
import {showCheckout, showHeaderDropdown} from "../../../../apolloClient/reactiveVariables/header";

const HeaderBasketIcon = () => {
    const checkout = useReactiveVar(checkoutProducts);

    return (
        <div className={styles.container}
             onClick={() => {
                 showCheckout(true);
                 showHeaderDropdown(!showHeaderDropdown());
             }}
        >
            <div className={styles.counter}>{checkout?.length ? checkout.length : 0}</div>
            <svg className={styles.icon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.66797L4 8.0013V26.668C4 27.3752 4.28095 28.0535 4.78105 28.5536C5.28115 29.0537 5.95942 29.3346 6.66667 29.3346H25.3333C26.0406 29.3346 26.7189 29.0537 27.219 28.5536C27.719 28.0535 28 27.3752 28 26.668V8.0013L24 2.66797H8Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 8H28" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3307 13.332C21.3307 14.7465 20.7688 16.1031 19.7686 17.1033C18.7684 18.1035 17.4119 18.6654 15.9974 18.6654C14.5829 18.6654 13.2264 18.1035 12.2262 17.1033C11.226 16.1031 10.6641 14.7465 10.6641 13.332" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

export default HeaderBasketIcon;