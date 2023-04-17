import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import { SearchBar } from '../../Components/Html'

const SellerPage = (p) => {

  const [show, setshow] = useState(true)

  return (
    <>
      <SearchBar iconBack newSearchArray={p.newSearchSellerArray}
       brand show={show} setshow={setshow} bgcolor='#aaa' src={p.logoUrl}
        iconPress={() => { p.navigation.goBack() }} array={p.sellerTable} setarray={p.setsellerTable} >
        {p.children}
      </SearchBar>
    </>
  )
}

export default SellerPage