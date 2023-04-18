
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PermissionsAndroid, Platform, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import GetLocation from 'react-native-get-location';
import Frame from '../../other/Components/other/Frame'
import { localhost } from '../../other/utils/axios/axios'
import { Button, Column } from '../../other/Components/Html'


const Location = (p) => {

  const [token, settoken] = useState({})

  useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      settoken(token)
    })
  }, [])



  return (
    <Column f={1}>
      <Frame source={{
        html: `
 <html dir='rtl' >
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="${localhost}/leaflet/leaflet.css" />
  </head>
 <body>
  <div style="display: flex; justify-content: flex-start; height: 100%; overflow:hidden ">
  <div id="map" style="width:100%; height: 102%;display:flex;"></div>
  </div>
 <script src="${localhost}/leaflet/axios.js"></script>
 <script src="${localhost}/leaflet/leaflet.js"></script>
 <script>

   //! axios
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] = ${JSON.stringify(token)}
   //! axios
      
   //! map
   const latlng = ${p.route.params.latlng}
      map = L.map('map', { center: latlng, zoom: 17, })
    var myIcon = L.icon({ iconUrl: '${localhost}/images/mark.png', iconSize: [38, 95], iconAnchor: [22, 94], popupAnchor: [-3, -76], shadowSize: [68, 95], shadowAnchor: [22, 94], });
    let markerOption = { draggable: false, icon: myIcon }
    let marker = L.marker(latlng, markerOption).addTo(map)
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);
   //! map


   //! onload
   (async () => {
     const { data, status } = await axios.post('${localhost}/reverse', latlng, { headers: { 'Content-Type': 'application/json' } })
     if (status) {
       if (data[0]) {
         const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
         const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
         const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
         const street = one + ' ' + two + ' ' + three
         marker.bindPopup(street).openPopup()
         setTimeout(() => { marker.bindPopup(street).openPopup() }, 500)
         map.stopLocate()
         disable.current = false
       }
     }
   })()
   //! onload


    </script>
      <body>
  </html>

      `}} />
        {/* <button style={{display:'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#fff', padding: '1px 1px 2px', borderRadius: '4px', zIndex: 10000, position: 'absolute',  bottom:4, right: 4, fontSize: 20, height: 35, width: 37, borderWidth: 0, boxShadow: '.2px 1.5px 4px #333d' }}><a href={`geo:${p.route.params.latlng.lat},${p.route.params.latlng.lng}`} style={{ fontWeight:'bolder',fontSize:22, padding: 0, margin: 0, marginTop: -2 }}>↝</a></button> */}

    </Column>
  )
}

export default Location;
