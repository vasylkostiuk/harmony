import CheckDetails from "../../src/components/Checkout/CheckDetails";
import {useQuery} from "@apollo/client";
import {GET_FOOTER} from "../../src/apolloClient/queries";
import Footer from "../../src/components/Footer/Footer";
import {getHeader} from "../../src/preRender/ISR";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";

const CheckDetailsPage = ({header}) => {
    const {data, loading} = useQuery(GET_FOOTER);

    return (
        <>
            <div className="container">
                <HeaderTop
                    logoUrl={header?.logo?.url}
                    otherLinks={header?.otherLinks}
                    productLinks={header?.productLinks}
                />
                <CheckDetails/>
            </div>
            {
                !loading
                    ?
                    <Footer footer={data?.footers[0]} withMobileWidget={true}/>
                    :
                    <></>
            }
        </>
    );
}

export const getStaticProps = getHeader;

export default CheckDetailsPage;