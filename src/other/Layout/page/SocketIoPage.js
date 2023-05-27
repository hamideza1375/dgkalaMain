import React from 'react'
import BottomTab from '../../Components/tabNavigation/BottomTab'

const SocketIoPage = (p) => {
  return (
    <BottomTab name={'SocketIo'} title={'SocketIo'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
        {p.children}
    </BottomTab>
  )
}

export default SocketIoPage