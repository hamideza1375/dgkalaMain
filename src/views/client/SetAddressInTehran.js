import React from 'react';
import _useEffect from '../../controllers/_initial';
import { Column, Form } from '../../other/Components/Html';
import { getAddress } from '../../services/clientService';


function SetAddressInTehran(p) {
  const confirmPayment = () => {
    if (p.latlng.lat < 35.5578099 || p.latlng.lat > 35.7767168 || p.latlng.lng < 51.1029017 || p.latlng.lng > 51.6488662) {
      p.toast.warning('خطا', 'ارسال سفارش فقط در تهران با نقشه پشتیبانی میشود')
      p.setshowActivity(false)
    }
    else {
      p._client.confirmPayment('تهران')
    }
  }

  _useEffect(() => {
    if (p.tokenValue.fullname) p.setfullname(p.tokenValue.fullname)
  }, [])

  _useEffect(() => {
    getAddress().then(({ data }) => {
      if (data.phone) { p.setphone(data.phone) }
      else if (p.tokenValue.phone) { p.setphone(p.tokenValue.phone) }
      else if (p.tokenValue.phoneOrEmail) {
        if (Number(p.tokenValue.phoneOrEmail) && (!p.tokenValue.phoneOrEmail.includes('@')))
          p.setphone(p.tokenValue.phoneOrEmail)
      }
      data.address && p.setaddress(data.address)
      data.latlng && p.setlatlng(data.latlng)
    })
    return () => { p.setaddress(''); p.setlatlng({ lat: 0, lng: 0 }) }
  }, [])
 


  return (
    <Column f={1} >
      <Form f ph $plaque $unit $address flexDirection='row' onClick={() => p.latlng.lat ?
        confirmPayment()
        :
        p.toast.show('', 'برگردین روی نقشه موقعیتتان را مشخص کنید')} />
    </Column>
  )
}
export default SetAddressInTehran;
