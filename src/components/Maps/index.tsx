import React, { useState } from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import { Console } from 'console';
const data = process.env.REACT_APP_GOOGLE_API_KEY?process.env.REACT_APP_GOOGLE_API_KEY:''

const Maps: React.FC = (props:any) => {

    const {google} = props
    const [App, setApp] = useState()
    function search(App:any,center:any){
        const service = new google.maps.places.PlacesService(App);
        const request = {
            location: center,
            radius:'20000',
            type:['restaurant']
        }
        service.nearbySearch(request,(results:any,status:any) =>{
            if(status === google.maps.places.PlacesService.OK)
            {console.log('2323ewqd',results)}
        })

    }
    function onMapReady(_:any,App:any){
        setApp(App)
        search(App,App.center)

    }
''
  return (
  <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady}>
  </Map>
  )
  
}

console.log(data)
export default GoogleApiWrapper({
    apiKey:data,
    language:'pt-br'
})(Maps);