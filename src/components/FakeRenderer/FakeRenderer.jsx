import Image from "next/image";

const FakeRenderer = ({url}) => {
    return (
        <div style={{position: "fixed", top: -2000, left: -2000}}>
            <Image src={url} layout='fill' alt="Harmony Domes"/>
        </div>
    );
}

export default FakeRenderer;