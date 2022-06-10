const customLoader = ({src, width}) => {
    const relativeSrc = (src) => src.split('/').pop();

    return `https://media.graphassets.com/resize=width:${width}/${relativeSrc(
        src
    )}`;
}

export default customLoader;