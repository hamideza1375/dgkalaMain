import React, { useState } from 'react'
import HomeDrawer from '../../../views/client/components/HomeDrawer'
import { SearchBar } from '../../Components/Html'
import { allProduct } from '../../../services/clientService'

const HomePage = (p) => {

  const [show, setshow] = useState(true)

  const allProductForSearchBar = (text) => {
    allProduct(text).then(({ data }) => {
      p.setallProduct(data.value);
      p.setnewSearchHomeArray(data.value)
    })
  }

  return (
    <>
      <SearchBar onChange={(text) => allProductForSearchBar(text)} icon={'bars'} drawer={<HomeDrawer {...p} />} showDrawer={show} setshowDrawer={setshow} home newSearchArray={p.newSearchHomeArray} bgcolor='#e833a8ee' src={p.logoUrl} iconPress={() => { setshow(!show) }} array={p.allProduct} setarray={p.setallProduct} >
        {p.children}
      </SearchBar>
    </>
  )
}

export default HomePage