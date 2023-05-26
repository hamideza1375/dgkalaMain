import React from 'react'
import BottomTab from '../../Components/tabNavigation/BottomTab'

const SingleProductPage = (p) => {
  return (
    <BottomTab productBasket={p.productBasket} socketIoSeen={p.socketIoSeen} name={'SingleProduct'} title={'پروفایل'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
      {p.children}
    </BottomTab>
  )
}

export default SingleProductPage