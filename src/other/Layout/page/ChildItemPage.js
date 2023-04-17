import React, { memo, useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import FilterListDrawer from '../../../views/client/components/FilterListDrawer'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'


const ChildItemPage = (p) => {

  const [show, setshow] = useState(true)

  return (
    <>
      <SearchBar drawer={<FilterListDrawer setshowDrawer={setshow} {...p} array={p.newSearchArray} setarray={p.setchildItem} />} showDrawer={show} setshowDrawer={setshow}
       product newSearchArray={p.newSearchArray} sort bgcolor='#ee4499fa' icon={'bars'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} array={p.childItem} setarray={p.setchildItem} >

        <BottomTab productBasket={p.productBasket} socketIoSeen={p.socketIoSeen} name={'ChildItems'} title={'پروفایل'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
          {p.children}
        </BottomTab>

      </SearchBar>
    </>
  )
}

export default memo(ChildItemPage)