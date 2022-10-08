import React from "react";

const ImageSequence = ({images, progress}) => {

    let index = Math.round(progress * (images?.length - 1));

    let result;

    result = images.map((item, i) => (
        <img src={item?.url}
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
