import React, { useEffect, useRef, useState } from 'react'
import { axios, localhost } from '../../other/utils/axios/axios'
import L from 'leaflet'
import'leaflet/dist/leaflet.css'

const ShowLatLngOnMap = (p) => {

  const [showGetLocate, setshowGetLocate] = useState(false)


  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <button id='btnGetLocation' style={{ opacity: .9, display: !showGetLocate ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#ccc', padding: '1px 1px 2px', borderRadius: '4px', zIndex: 10000, position: 'absolute', top: 20, right: 10, fontSize: 20, height: 32, maxHeight: 35, width: 28, borderWidth: 0, boxShadow: '.2px 1.5px 4px #333d' }}><p style={{ transform: 'rotate(-65deg)', padding: 0, margin: 0, marginTop: -2 }}>⌲</p></button>
      <button id='btnGetLocation2' style={{ opacity: 1, display: showGetLocate ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#fff', padding: '1px 1px 2px', borderRadius: '4px', zIndex: 10000, position: 'absolute', top: 20, right: 10, fontSize: 20, height: 32, maxHeight: 35, width: 28, borderWidth: 0, boxShadow: '.2px 1.5px 4px #333d' }}><p style={{ transform: 'rotate(-65deg)', padding: 0, margin: 0, marginTop: -2 }}>⌲</p></button>
      <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#fff', padding: '1px 1px 2px', borderRadius: '4px', zIndex: 10000, position: 'absolute', bottom: 4, right: 4, fontSize: 20, height: 35, width: 37, borderWidth: 0, boxShadow: '.2px 1.5px 4px #333d' }}><a href={`geo:${JSON.parse(p.route.params.latlng).lat},${JSON.parse(p.route.params.latlng).lng}`} style={{ fontWeight: 'bolder', fontSize: 22, padding: 0, margin: 0, marginTop: -2 }}>↝</a></button>
      <_map {...p} setshowGetLocate={setshowGetLocate} />
    </div>
  );
}



function _map(p) {

  const disable = useRef(false)

  useEffect(() => {
    //! map
    let latlng = JSON.parse(p.route.params.latlng)
    let map = L.map('map', { center: latlng, zoom: 17 })
    //! map

    //! marker
    var myIcon = L.icon({ iconUrl: require(`leaflet/dist/images/marker-icon.png`), iconSize: [30, 60], iconAnchor: [22, 94], popupAnchor: [-3, -76], shadowSize: [68, 95], shadowAnchor: [22, 94], });
    let markerOption = { draggable: false, icon: myIcon }
    let marker = L.marker(latlng, markerOption).addTo(map)
    //! marker

    //! layer
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);
    //! layer

    //! circle2
    let mark2 = { lat: 1.214174234928924, lng: 1.68491965736432 }
    var myIcon2 = L.icon({ iconUrl: `${localhost}/leaflet/circle.png`, iconSize: [17, 17] });
    let markerOption2 = { draggable: false, icon: myIcon2 }
    var marker2 = L.marker(mark2, markerOption2).addTo(map)
    var circle1 = L.circle(mark2, 5).addTo(map);
    var circle2 = L.circle(mark2, 60).addTo(map);
    //! circle2


    //! onload
    (async () => {
      const { data, status } = await axios.post(`${localhost}/reverse`, latlng, { headers: { 'Content-Type': 'application/json' } })
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




    //! getUserLocation
    const btn1 = document.getElementById('btnGetLocation')
    const btn2 = document.getElementById('btnGetLocation2')

    btn1.onclick = () => {
      p.setshowGetLocate(true)
      function onLocationError(e) { alert('نتوانست موقعیت مکانیتان را پیدا کند'); }
      async function onLocationFound(e) {
        (async () => {
          circle1.setLatLng(e.latlng)
          circle2.setLatLng(e.latlng)
          marker2.setLatLng(e.latlng)
        })()
      }
      map.on('locationfound', onLocationFound);
      map.on('locationerror', onLocationError);
      map.locate({ watch: true, setView: true })
      //* watch برای اینه که دنبالش کنه یا نه
    }

    btn2.onclick = () => {
      map.stopLocate()
      map.locate({ watch: false, setView: false })
      p.setshowGetLocate(false)
    }

    //! getUserLocation

    return () => {
      map.stopLocate && map.stopLocate()
      map.off && map.off();
      map.remove && map.remove();

    }
  }, [])

  return <div id="map" style={{ width: '100%', height: '100%', position: 'fixed', bottom: 0, left: 0 }}></div>

}



export default ShowLatLngOnMap;
