import CheckoutColor from "./atoms/CheckoutColor/CheckoutColor";
import CheckouFeature from "./atoms/CheckoutFeature/CheckouFeature";
import CheckoutTitle from "./atoms/CheckoutTitle/CheckoutTitle";
import CheckoutProductPrice from "./atoms/CheckoutProductPrice/CheckoutProductPrice";
import CheckoutCounter from "./atoms/CheckoutCounter/CheckoutCounter";
import DeleteCross from "./atoms/DeleteCross/DeleteCross";
import EditPen from "./atoms/EditPen/EditPen";

const CheckDetails = () => {
    return (
        <div>
            <CheckoutTitle title={'Title'}/>
            <CheckoutColor color={'#000'} text={'Black'}/>
            <CheckouFeature text={'Feature'}/>
            <CheckoutProductPrice currentPrice={5000} previousPrice={6000}/>
            <CheckoutCounter quantity={1}/>
            <DeleteCross/>
            <EditPen/>
        </div>
    );
}

export default CheckDetails;