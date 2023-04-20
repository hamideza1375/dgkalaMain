import React, { useEffect, useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import PanelAdminDrawer from '../../../views/admin/components/PanelAdminDrawer'
import { SearchBar } from '../../Components/Html'

const PanelAdminPage = (p) => {

  const [show, setshow] = useState(true)

  useEffect(() => {
    if(p.width <= 1024 ) setshow(false)
    else setshow(true)
   }, [p.route.name])

  return (
    <>
      <SearchBar setshownDropdown={p.setshownDropdown} drawer={<PanelAdminDrawer {...p} />}
        title='پنل ادمین'
        showDrawer={show} setshowDrawer={setshow} bgcolor='#fffe' icon={'bars'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} >
        {p.children}
      </SearchBar>
    </>
  )
}

export default PanelAdminPage