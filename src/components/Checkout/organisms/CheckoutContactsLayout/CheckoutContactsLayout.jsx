import styles from './CheckoutContactsLayout.module.css';
import ContactPersonal from "../../molecules/ContactPersonal/ContactPersonal";
import ContactAddress from "../../molecules/ContactAdress/ContactAdress";
import Summary from "../../atoms/Summary/Summary";
import CheckoutLayout from "../../../global/LoadCircle/layouts/CheckoutLayout/CheckoutLayout";
import Link from "next/link";

const CheckoutContactsLayout = () => {
    return (
        <>
            <CheckoutLayout>
                <div>
                    <ContactPersonal/>
                    <ContactAddress/>
                </div>
                <Summary isFinal={true}/>
            </CheckoutLayout>
            <div className={styles.footer__margin}></div>
        </>
    );
}

export default CheckoutContactsLayout;