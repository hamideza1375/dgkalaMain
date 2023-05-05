
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import GetLocation from 'react-native-get-location';
import Frame from '../../other/Components/other/Frame'
import { localhost } from '../../other/utils/axios/axios'
import { Button, Column } from '../../other/Components/Html'


const Location = (p) => {

  const [token, settoken] = useState({})
  const [userLocationLatLng, setuserLocationLatLng] = useState({})

  useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      settoken(token)
    })
  }, [])




  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: '',
          message: '',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      ).then(() => {
        Geolocation.getCurrentPosition(
          ({ coords }) => {
            setuserLocationLatLng({ lat: coords.latitude, lng: coords.longitude, })
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      })
    }
    else if (Platform.OS === 'ios') {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then(location => {
          Geolocation.getCurrentPosition(
            ({ coords }) => {
              setuserLocationLatLng({ lat: coords.latitude, lng: coords.longitude, })
            },
            (error) => {
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          )
        })
        .catch(error => {
          const { code, message } = error;
          console.warn(code, message);
        })
    }

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
    <form id="formSearch" style="width:250px;margin: 3px 2px 0 0; display:flex;flex-direction: row; position: absolute; align-items: flex-end; ">
     <input id='inputSearch' onchange="serchInput(event.target.value)" type="text" placeholder="مناطق تهران را جستجو کنید" style="padding-right:5px;text-align: right;border-radius: 1px;border: 1px solid rgb(150, 146, 146);display:block;flex-grow: 1;height: 30.5px;position:relative;z-index:1000"; />
     <i id="searching" style="border-radius: 1px;padding: 2px 5px 0px;border: 1px solid rgb(150, 146, 146); background-color: #fff;font-size: 19px;display:block;height: 30px;width: 37px;position:relative;z-index:1000;box-sizing:border-box">
     <span style=" display: flex; align-items: center; transform: rotate(-45deg); margin-top: 7px; margin-left: -2px"} >
      <span style=" border: 3px solid black; height: 8px; width: 8px; border-radius: 50% " ></span>
      <span style=" border: 1px solid black; height: 3px; width: 7px; border-radius: 50%; background:black " ></span>
     </span>
     </i>
    </form>
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
    let latlng = { lat: 35.6892523, lng: 51.3896004 },
    map = L.map('map', { center: latlng, zoom: 17, })
    var myIcon = L.icon({ iconUrl: '${localhost}/leaflet/mark.png', iconSize: [38, 95], iconAnchor: [22, 94], popupAnchor: [-3, -76], shadowSize: [68, 95], shadowAnchor: [22, 94], });
    let markerOption = { draggable: true, icon: myIcon }
    let marker = L.marker(latlng, markerOption).addTo(map)
    map.on('click', (ev) => { marker.openPopup() })
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);
   //! map


    //! marker dragend
    marker.on('dragend', async (ev) => {
      map.setView({ lat: ev.target._latlng.lat, lng: ev.target._latlng.lng })
      const { data, status } = await axios.post('${localhost}/reverse', JSON.stringify({ lat: ev.target._latlng.lat, lng: ev.target._latlng.lng }), { headers: { 'Content-Type': 'application/json' } })
      if (status) {
        if (data[0]) {
          const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
          const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
          const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
          const street = one + ' ' + two + ' ' + three
          marker.bindPopup(street).openPopup()
        }
      }
    });
    //! marker dragend

    //! searching
    const searching = async () => {
      const { data, status } = await axios.post('${localhost}/geocode', { loc: 'تهران' + ' ' + document.getElementById('inputSearch').value })
      if (status) {
        if (data[0]) {
          const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
          const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
          const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
          map.setView({ lat: data[0].latitude, lng: data[0].longitude });
          marker.setLatLng({ lat: data[0].latitude, lng: data[0].longitude })
          const street = one + ' ' + two + ' ' + three
          marker.bindPopup(street).openPopup()
          setTimeout(() => { marker.bindPopup(street).openPopup() }, 500)
        }
        else {
          marker.bindPopup('!پیدا نشد').openPopup()
        }
      }
    }
        
    
    document.getElementById('formSearch').onsubmit = (event) => { if (event) event.preventDefault(); searching() }
    document.getElementById('searching').onclick = () => searching()
    //! searching


    //! getUserLocation
     const getUserLocation = (() => {
      setTimeout(async()=>{       
        const { data, status } = await axios.post('${localhost}/reverse', ${JSON.stringify(userLocationLatLng)}, { headers: { 'Content-Type': 'application/json' } })
        if (status) {
          if (data[0]) {
            const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
            const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
            const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
            const street = one + ' ' + two + ' ' + three
            map.setView({ lat: data[0].latitude, lng: data[0].longitude });
            marker.setLatLng({ lat: data[0].latitude, lng: data[0].longitude })
            marker.bindPopup(street).openPopup()
            setTimeout(() => { marker.bindPopup(street).openPopup() }, 500)
          }
        }
      },700)
      })()

      
    //! getUserLocation


    </script>
      <body>
  </html>

      `}} />
      <Column bgcolor='white' >
        <Button onClick={() => p.navigation.navigate('SetAddressInTehran')} outline >تایید</Button>
      </Column>

    </Column>
  )
}

export default Location;
