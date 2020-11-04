import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import React from 'react'
import { useState } from 'react';
import mapStyle from '../utilities/MapStyle';


function MapModal({add}) {
    const [response, setResponse] = useState(null);
    const [origin, setOrigin] = useState("")
    const travelMode = "DRIVING";


    const center = {
        lat: 1.3521,
        lng: 103.8198,
    };

    const options = {
        styles: mapStyle,
        disableDefaultUI: true,
    }

    function directionsCallback(response) {
        console.log(response)

        if (response !== null) {
          if (response.status === 'OK') {
            setResponse(response)
          } else {
            console.log('response: ', response)
          }
        }
    }

    function getOrigin(ref) {
        setOrigin(ref);
    }

    function onClick() {
        if (origin.value !== '') {
            setOrigin(origin.value)
          }
    }

    return (
        <div className='map'>
        <div className='map-settings'>
          <hr className='mt-0 mb-3' />

          <div className='row'>
            <div className='col-md-6 col-lg-6'>
              <div className='form-group d-flex'>
                <input id='ORIGIN' className='form-control' type='text' ref={getOrigin} placeholder="Enter Postal Code Here"/>
              </div>
            </div>
            <div className='col-md-6 col-lg-6'>
                <button className='btn btn-primary' type='button' onClick={onClick}>
                    Let's go!
                </button>
              </div>

          </div>



        </div>

        <div className='map-container'>
          <GoogleMap
            id='direction-example'
            mapContainerStyle={{
              height: '400px',
              width: '100%'
            }}
            zoom={12}
            center={center}
            options={options}
          >
            {
              (origin !== '') && (
                <DirectionsService
                  options={{ 
                    destination: add,
                    origin: origin,
                    travelMode: travelMode
                  }}
                  callback={directionsCallback}
                />
              )
            }

            {
              response !== null && (
                <DirectionsRenderer
                  options={{ 
                    directions: response
                  }}
                />
              )
            }
          </GoogleMap>
        </div>
      </div>
    )
}

export default MapModal


