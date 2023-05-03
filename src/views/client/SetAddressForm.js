import React from 'react';
import _useEffect from '../../controllers/_initial';
import { Column, Form, M_icon, Press, Py } from '../../other/Components/Html';
import { getAddress } from '../../services/clientService';
import AsyncStorage from '@react-native-async-storage/async-storage';


function SetAddressForm(p) {
  const confirmPayment = () => p._client.confirmPayment()

  _useEffect(() => {
    AsyncStorage.getItem('postalCode').then((res) => { if (res) p.setpostalCode(res) })
    AsyncStorage.getItem('_address').then((res) => { if (res) p.setaddress(res) })
    AsyncStorage.getItem('state').then((res) => { if (res) p.setstate(res) })
    AsyncStorage.getItem('City').then((res) => { if (res) p.setCity(res) })

    if (p.tokenValue.fullname) p.setfullname(p.tokenValue.fullname)

    getAddress().then(({ data }) => {
      if (data.phone) { p.setphone(data.phone) }
      else if (p.tokenValue.phone) { p.setphone(p.tokenValue.phone) }
      else if (p.tokenValue.phoneOrEmail) {
        if (Number(p.tokenValue.phoneOrEmail) && (!p.tokenValue.phoneOrEmail.includes('@')))
          p.setphone(p.tokenValue.phoneOrEmail)
      }
    })
    return () => { p.setpostalCode(''); p.setaddress(''); p.setstate(''); p.setCity('') }
  }, [])

  return (
    <Column f={1}>
      <Press onClick={() => p.navigation.replace('Map')} fd='row' bgcolor='#fff' p={10} pt={12} >
        <M_icon name={'gps-fixed'} size={19} color='#0cd' />
        <Py pr={5} >انتخاب از روی نقشه</Py>
        <Py fs={11} pr={5} mt={1} color='red' >(فقط مخصوص سفارشات در تهران)</Py>
      </Press>
      <Column f={1} >
        <Form f city ph postal $plaque $unit $address flexDirection={'row'} onClick={confirmPayment} />
      </Column>
    </Column>
  )
}
export default SetAddressForm;
