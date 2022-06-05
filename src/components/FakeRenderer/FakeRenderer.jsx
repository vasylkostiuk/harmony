import Image from "next/image";
import customLoader from "../../preRender/customLoader";

const FakeRenderer = ({url}) => {
    return (
        <div style={{position: "fixed", top: -2000, left: -2000}}>
            <Image
                src={url}
                layout='fill'
                loading='eager'
                alt="Harmony Domes"
                loader={customLoader}
                placeholder='blur'
                blurDataURL={url}
            />
        </div>
    );
}

export default FakeRenderer;