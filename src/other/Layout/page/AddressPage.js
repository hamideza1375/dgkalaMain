import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import { SearchBar } from '../../Components/Html'

const AddressPage = (p) => {

  const [show, setshow] = useState(true)

  return (
    <>
      <SearchBar address iconBack src={p.logoUrl} newSearchArray={p.newSearchAddressArray} showDrawer={show} setshowDrawer={setshow}
        bgcolor='#aaa'
        iconPress={() => { p.navigation.goBack() }} array={p.allAddress} setarray={p.setallAddress} >
        {p.children}
      </SearchBar>
    </>
  )
}

export default AddressPage