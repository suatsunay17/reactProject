import React from "react"
import GoogleMapReact from "google-map-react"
import './map.css'
import { LocationPin } from "./LocationPin"

export const Map = ({ location, zoomLevel }) => {

    return (
        <div data-testid="map" className="map">
            <h2 className="map-h2">Come Visit Us At Our Office</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

