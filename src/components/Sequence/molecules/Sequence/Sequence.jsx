import React from "react";
import customLoader from "../../../../preRender/customLoader";

const ImageSequence = ({images, progress}) => {

    let index = Math.round(progress * (images?.length - 1));

    let result;

    result = images.map((item, i) => (
        <img src={`${item?.url}?fit:crop/quality=value:75/output=format:webp/compress`}
               key={item.id}
               style={{
                   display: i !== index ? "none" : "block",
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                   height:'100vh',
                   width: '100vw',
                   objectFit: 'cover'
               }}
             alt="Harmony Domes"
        />
    ));

    return (
        <>
            {result}
        </>
    );
};

export default ImageSequence;
