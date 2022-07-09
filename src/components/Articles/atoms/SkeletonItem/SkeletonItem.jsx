const SkeletonItem = ({width, height, marginBottom = 0}) => {
    return (
        <div style={{
            position: "relative",
            width,
            height,
            marginBottom
        }}>
            <div className="loader"></div>
        </div>
    );
}

export default SkeletonItem;