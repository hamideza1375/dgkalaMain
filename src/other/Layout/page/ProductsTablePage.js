import React, { useState } from 'react'
import { SearchBar } from '../../Components/Html'

const ProductsTablePage = (p) => {
  const [show, setshow] = useState(false)

  return (
    <>
      <SearchBar product table newSearchArray={p.newSearchArray}
        sort show={show} setshow={setshow} bgcolor='#e833a8ee' icon={'arrow-left'}
        iconPress={() => { setshow(!show) }} array={p.childItem} setarray={p.setchildItem} >
        {p.children}
      </SearchBar>
    </>
  )
}

export default ProductsTablePage