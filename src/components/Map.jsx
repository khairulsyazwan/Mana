import React, {useEffect, useState} from 'react'
import { GoogleMap, useLoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { showOne } from '../utilities/functions';
import mapStyle from '../utilities/MapStyle.js';




function Map({loc, loc2, id, topic}) {


    const libraries = ["places"];
    const mapContainerStyle = {
        width: '100%',
        height: '500px'
    };

    const center = {
        lat: 1.3521,
        lng: 103.8198,
    };

    const options = {
        styles: mapStyle,
        disableDefaultUI: true,
    }

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY_GMAP,
        libraries,

    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "loading Maps";


    const onLoad = marker => {
        // console.log('marker: ', marker)
      }


    return (
        <div>
            
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={11} center={center} options={options}>
            {loc2 && <Marker onLoad={onLoad} position={loc2} />}
            <Marker onLoad={onLoad} position={loc} />
            </GoogleMap>

        </div>
    )
}

export default Map









