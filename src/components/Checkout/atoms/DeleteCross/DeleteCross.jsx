import {checkoutProducts} from "../../../../apolloClient/reactiveVariables/checkout";
import {deleteProduct} from "../../../../services/changeCheckoutObj";

const DeleteCross = ({productId}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{cursor: "pointer"}}
            onClick={() => checkoutProducts([...deleteProduct(checkoutProducts(), productId)])}
        >
            <path d="M18 6L6 18" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
    );
}

export default DeleteCross;