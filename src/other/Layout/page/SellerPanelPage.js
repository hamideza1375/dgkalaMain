import React, { useState } from 'react'
import { SearchBar } from '../../Components/Html'
import ProfileDrawer from '../../../views/user/components/ProfileDrawer'

const SellerPanelPage = (p) => {
  const [show, setshow] = useState(false)

  return (
    <>
      <SearchBar
        setshownDropdown={p.setshownDropdown} drawer={<ProfileDrawer {...p} />}
        showDrawer={show} setshowDrawer={setshow} bgcolor='#fffe' icon={'bars'} iconSrc={'home'}

        product table newSearchArray={p.newSearchSellerArray}
        sort show={show} setshow={setshow}
        iconPress={() => { setshow(!show) }} array={p.sellerItems} setarray={p.setsellerItems} >
        {p.children}
      </SearchBar>
    </>
  )
}

export default SellerPanelPage