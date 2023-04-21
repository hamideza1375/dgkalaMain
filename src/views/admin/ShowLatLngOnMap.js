
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Frame from '../../other/Components/other/Frame'
import { localhost } from '../../other/utils/axios/axios'
import { Column, P, Press } from '../../other/Components/Html'
import Linking from '../../other/utils/linking';


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
    var myIcon = L.icon({ iconUrl: '${localhost}/leaflet/mark.png', iconSize: [38, 95], iconAnchor: [22, 94], popupAnchor: [-3, -76], shadowSize: [68, 95], shadowAnchor: [22, 94], });
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
      <Press onClick={()=>{ Linking(`geo:${JSON.parse(p.route.params.latlng).lat},${JSON.parse(p.route.params.latlng).lng}`)}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 3, zIndex: 10000, position: 'absolute', bottom: 10, right: 7, height: 35, width: 37, borderWidth: 1, borderColor: '#aaa', backgroundColor: '#fff' }}>
        <P fs={30} mt={-12} color={'#555'} >↝</P>
      </Press>

    </Column>
  )
}

export default Location;
