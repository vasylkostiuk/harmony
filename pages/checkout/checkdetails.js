import CheckDetails from "../../src/components/Checkout/CheckDetails";
import {useQuery} from "@apollo/client";
import {GET_FOOTER} from "../../src/apolloClient/queries";
import Footer from "../../src/components/Footer/Footer";

const CheckDetailsPage = () => {
    const {data, loading} = useQuery(GET_FOOTER);

    return (
        <>
            <div className="container">
                <CheckDetails/>
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

export default CheckDetailsPage;