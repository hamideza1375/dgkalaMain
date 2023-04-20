import React, { memo, useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import FilterListDrawer from '../../../views/client/components/FilterListDrawer'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'


const ChildOffersPage = (p) => {

  const [show, setshow] = useState(true)

  return (
    <>
      <SearchBar drawer={<FilterListDrawer setshowDrawer={setshow} {...p} array={p.newSearchOffershArray} setarray={p.setoffers} />} showDrawer={show} setshowDrawer={setshow}
       product newSearchArray={p.newSearchOffershArray} sort bgcolor='#e833a8ee' icon={'bars'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} array={p.offers} setarray={p.setoffers} >

        <BottomTab productBasket={p.productBasket} socketIoSeen={p.socketIoSeen} name={'ChildOffers'} title={'پروفایل'} group={p.bottom} bgcolor='#e833a8ee' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
          {p.children}
        </BottomTab>

      </SearchBar>
    </>
  )
}

export default memo(ChildOffersPage)