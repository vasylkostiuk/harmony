import GoogleMapReact from 'google-map-react';

const Map = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDGb6QUKYZm1KiZhDXnbVBKOfWLCvULwg0" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        />
    )
}

export default Map;