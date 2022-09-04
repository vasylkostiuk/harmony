import CheckoutRoadmap from "../../src/components/Checkout/atoms/CheckoutRoadmap/CheckoutRoadmap";
import {useQuery, useReactiveVar} from "@apollo/client";
import {checkoutProducts} from "../../src/apolloClient/reactiveVariables/checkout";
import CheckoutEmpty from "../../src/components/Checkout/atoms/CheckoutEmpty/CheckoutEmpty";
import {GET_FOOTER} from "../../src/apolloClient/queries";
import Footer from "../../src/components/Footer/Footer";
import {getHeader} from "../../src/preRender/ISR";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";
import CheckoutContactsLayout
    from "../../src/components/Checkout/organisms/CheckoutContactsLayout/CheckoutContactsLayout";

const Contact = ({header}) => {
    const checkout = useReactiveVar(checkoutProducts);
    const {data, loading} = useQuery(GET_FOOTER);

    return (
        <>
            <div className="container">
                <HeaderTop
                    logoUrl={header?.logo?.url}
                    otherLinks={header?.otherLinks}
                    productLinks={header?.productLinks}
                />
                {
                    !checkout?.length
                        ?
                        <CheckoutEmpty/>
                        :
                        <>
                            <CheckoutRoadmap isFinal={true}/>
                            <CheckoutContactsLayout/>
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

export const getStaticProps = getHeader;

export default Contact;