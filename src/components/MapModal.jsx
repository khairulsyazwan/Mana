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
            <div className='col-md-6 col-lg-4'>
              <div className='form-group'>
                <label htmlFor='ORIGIN'>Origin</label>
                <br />
                <input id='ORIGIN' className='form-control' type='text' ref={getOrigin} />
              </div>
            </div>

          </div>


          <button className='btn btn-primary' type='button' onClick={onClick}>
            Build Route
          </button>
        </div>

        <div className='map-container'>
          <GoogleMap
            // required
            id='direction-example'
            // required
            mapContainerStyle={{
              height: '600px',
              width: '100%'
            }}
            // required
            zoom={12}
            // required
            center={center}
            options={options}
          >
            {
              (origin !== '') && (
                <DirectionsService
                  // required
                  options={{ 
                    destination: add,
                    origin: origin,
                    travelMode: travelMode
                  }}
                  // required
                  callback={directionsCallback}
                />
              )
            }

            {
              response !== null && (
                <DirectionsRenderer
                  // required
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


