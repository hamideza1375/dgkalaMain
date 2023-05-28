import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import { SearchBar } from '../../Components/Html'
import PanelAdminDrawer from '../../../views/admin/components/PanelAdminDrawer'

const AddressPage = (p) => {

  const [show, setshow] = useState(true)

  return (
    <>
      <SearchBar
        setshownDropdown={p.setshownDropdown} drawer={<PanelAdminDrawer {...p} />} icon={'bars'} iconPress={() => { setshow(!show) }}
        address iconBack src={p.logoUrl} newSearchArray={p.newSearchAddressArray} showDrawer={show} setshowDrawer={setshow}
        bgcolor='#f5f5f5'
        array={p.allAddress} setarray={p.setallAddress} >
        {p.children}
      </SearchBar>
    </>
  )
}

export default AddressPage