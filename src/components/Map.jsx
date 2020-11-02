import React, {useEffect, useState} from 'react'
import { GoogleMap, useLoadScript, Marker, DirectionsService } from '@react-google-maps/api';
import { showOne } from '../utilities/functions';


const libraries = ["places"];
const mapContainerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 1.3521,
    lng: 103.8198,
}

function Map({lat, lng,  topic, id}) {


    // let location = {
    //     lat: loc.latitude,
    //     lng: loc.longitude
    // }

    

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
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center} >
            {/* <Marker onLoad={onLoad} position={location} />
            <Marker onLoad={onLoad} position={loc} /> */}
            </GoogleMap>

        </div>
    )
}

export default Map
