    import React, { useState } from 'react';
    import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'

const data = process.env.REACT_APP_GOOGLE_API_KEY?process.env.REACT_APP_GOOGLE_API_KEY:''

const Maps = (props:{google:any,query:string}) => {

    const {google,query} = props
    const [App, setApp] = useState<any>({})

function serachByQuery(query:any){
    const service = new google.maps.places.PlacesService(App);
    const request = {
        location: App.center,
        radius:'20000',
        type:['restaurant'],
        query
    }
    service.textSearch(request,(results:any,status:any) =>{
        if(status === google.maps.places.PlacesService.OK)
        {console.log('2323ewqd',query)}
    })

}

    function search(App:any,center:any){
        const service = new google.maps.places.PlacesService(App);
        const request = {
            location: center,
            radius:'20000',
            type:['restaurant'],
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

export default GoogleApiWrapper({
    apiKey:data,
    language:'pt-br'
})(Maps);