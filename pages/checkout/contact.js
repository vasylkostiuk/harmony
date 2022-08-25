import ContactPersonal from "../../src/components/Checkout/molecules/ContactPersonal/ContactPersonal";
import ContactAddress from "../../src/components/Checkout/molecules/ContactAdress/ContactAdress";
import CheckoutLayout from "../../src/components/global/LoadCircle/layouts/CheckoutLayout/CheckoutLayout";
import Summary from "../../src/components/Checkout/atoms/Summary/Summary";
import CheckoutRoadmap from "../../src/components/Checkout/atoms/CheckoutRoadmap/CheckoutRoadmap";
import {useQuery, useReactiveVar} from "@apollo/client";
import {checkoutProducts} from "../../src/apolloClient/reactiveVariables/checkout";
import CheckoutEmpty from "../../src/components/Checkout/atoms/CheckoutEmpty/CheckoutEmpty";
import {GET_FOOTER} from "../../src/apolloClient/queries";
import Footer from "../../src/components/Footer/Footer";

const Contact = () => {
    const checkout = useReactiveVar(checkoutProducts);
    const {data, loading} = useQuery(GET_FOOTER);

    return (
        <>
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
            {
                !loading
                    ?
                    <Footer footer={data?.footers[0]}/>
                    :
                    <></>
            }
        </>
    );
}

export default Contact;