
import GoogleMapReact from 'google-map-react';
import { googleMapAPIKey } from './Map';
import { FaMapMarker } from "react-icons/fa";
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
    const defaultProps = {
        center: {
            lat: 23.8041,
            lng: 90.4152
        },
        zoom: 11
    };

    return (
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapAPIKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={23.8041}
                    lng={90.4152}
                    text="Dhaka"
                    
                />
                <FaMapMarker className='text-4xl text-red-500' />
            </GoogleMapReact>
        </div>
    );
};
AnyReactComponent.propTypes = {
    text: PropTypes.string
}

export default GoogleMap;