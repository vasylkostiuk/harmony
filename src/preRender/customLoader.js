const customLoader = ({src, width}) => {
    const relativeSrc = (src) => src.split('/').pop();

    return `https://media.graphassets.com/resize=width:${width},fit:crop/quality=value:75/output=format:webp/compress/${relativeSrc(
        src
    )}`;
}

export default customLoader;