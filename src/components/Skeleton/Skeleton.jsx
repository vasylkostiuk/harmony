import React from "react";

export const Skeleton = ({
                                                           count,
                                                           width,
                                                           height,
                                                           circle,
                                                           margin
                                                       }) => {
    const elements = [];

    for (let i = 0; i < count; i++) {
        let style =  {
            margin: margin,
            borderRadius: '0'
        };

        if (width !== null) {
            style.width = width;
        }

        if (height !== null) {
            style.height = height;
        }

        if (width !== null && height !== null && circle) {
            style.borderRadius = "100%";
        }

        elements.push(
            <span key={i} className="skeleton" style={style}>
        &zwnj;
      </span>
        );
    }

    return (
        <span>
      {elements}
    </span>
    );
};

Skeleton.defaultProps = {
    count: 1,
    width: null,
    height: null,
    circle: false,
    margin: 0
};
