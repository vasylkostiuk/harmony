import customLoader from "../../../../preRender/customLoader";
import Image from "next/image";

const CheckoutProductImage = ({url, width, height}) => {
    return (
        <Image
            src={url}
            width={width}
            height={height}
            placeholder='blur'
            blurDataURL={url}
            loading='lazy'
            alt={'Harmony Domes'}
            loader={customLoader}
        />
    );
}

export default CheckoutProductImage;