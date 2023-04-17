import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import _useEffect from '../../controllers/_initial'
import { Column } from '../../other/Components/Html'
import Frame from '../../other/Components/other/Frame'

const FramePayment = (p) => {
   _useEffect(() => {
     AsyncStorage.removeItem('deleteBasket').then(() => { })
     return () => p.setchangePage(!p.changePage)
   }, [])
  return (
    <Column f={1} >
      <Frame source={{ uri: p.route.params.url }} />
    </Column>
  )
}

export default FramePayment