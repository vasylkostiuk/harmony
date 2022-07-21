import ContactPersonal from "../../src/components/Checkout/molecules/ContactPersonal/ContactPersonal";
import ContactAddress from "../../src/components/Checkout/molecules/ContactAdress/ContactAdress";
import CheckoutLayout from "../../src/layouts/CheckoutLayout/CheckoutLayout";
import Summary from "../../src/components/Checkout/atoms/Summary/Summary";
import CheckoutRoadmap from "../../src/components/Checkout/atoms/CheckoutRoadmap/CheckoutRoadmap";
import {useReactiveVar} from "@apollo/client";
import {checkoutProducts} from "../../src/apolloClient/reactiveVariables/checkout";
import CheckoutEmpty from "../../src/components/Checkout/atoms/CheckoutEmpty/CheckoutEmpty";

const Contact = () => {
    const checkout = useReactiveVar(checkoutProducts);

    return (
        <div className="container">
            {
                !checkout?.length
                    ?
                    <CheckoutEmpty/>
                    :
                    <>
                        <CheckoutRoadmap isFinal={true}/>
                        <CheckoutLayout>
                            <div>
                                <ContactPersonal/>
                                <ContactAddress/>
                            </div>
                            <Summary isFinal={true}/>
                        </CheckoutLayout>
                    </>
            }
        </div>
    );
}

export default Contact;