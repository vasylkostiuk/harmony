import ContactPersonal from "../../src/components/Checkout/molecules/ContactPersonal/ContactPersonal";
import ContactAddress from "../../src/components/Checkout/molecules/ContactAdress/ContactAdress";
import CheckoutLayout from "../../src/layouts/CheckoutLayout/CheckoutLayout";
import Summary from "../../src/components/Checkout/atoms/Summary/Summary";
import CheckoutRoadmap from "../../src/components/Checkout/atoms/CheckoutRoadmap/CheckoutRoadmap";

const Contact = () => {
    return (
        <div className="container">
            <CheckoutRoadmap isFinal={true}/>
            <CheckoutLayout>
                <div>
                    <ContactPersonal/>
                    <ContactAddress/>
                </div>
                <Summary isFinal={false}/>
            </CheckoutLayout>
        </div>
    );
}

export default Contact;