import React, { useState } from 'react'
import HomeDrawer from '../../../views/client/components/HomeDrawer'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'
import _useEffect from '../../../controllers/_initial'

const HomePage = (p) => {

  const [show, setshow] = useState(true)

  return (
    <>
      <SearchBar icon={'bars'} drawer={<HomeDrawer {...p} />} showDrawer={show} setshowDrawer={setshow}
        home newSearchArray={p.newSearchHomeArray} bgcolor='#e833a8ee'
         src={p.logoUrl}
        iconPress={() => { setshow(!show) }} array={p.allProduct} setarray={p.setallProduct} >

        <BottomTab productBasket={p.productBasket} socketIoSeen={p.socketIoSeen} name={'Home'} title={'پروفایل'} group={p.bottom} bgcolor='#e833a8ee' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
          {p.children}
        </BottomTab>
      </SearchBar>
    </>
  )
}

export default HomePage