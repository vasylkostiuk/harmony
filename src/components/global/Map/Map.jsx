import GoogleMapReact from 'google-map-react';

const Map = ({mapInfo}) => {
    const defaultProps = {
        center: {
            lat: mapInfo?.latitude,
            lng: mapInfo?.longitude
        },
        zoom: 13
    };

    return (
        <GoogleMapReact
            bootstrapURLKeys={
                {
                    key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
                    language: 'en',
                }
            }
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
    )
}

export default Map;