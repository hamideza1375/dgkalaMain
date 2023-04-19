import React, { useState } from 'react'
import { P, SearchBar } from '../Components/Html'
import _useEffect from '../src/controllers/_initController'

function SearchInput(p) {

  const [array, setarray] = useState([
    { id: '1',price:100, title: 'TITLE1' },
    { id: '2',price:300, title: 'TITLE2' },
    { id: '3',price:1200, title: 'TITLE3' },
    { id: '4',price:700, title: 'TITLE4' }
  ])

  const [array2] = useState([
    { id: '1',price:40, title: 'title1am' },
    { id: '2',price:2100, title: 'sal2am' },
    { id: '3',price:8100, title: 'sal3am' },
    { id: '4',price:100, title: 'sal4am' }
  ])
 


  _useEffect(() => {
    p.navigation.setOptions({ header: () => 
    <SearchBar
     Register={p.width > 395 ? true : false}
      icon={'filter'} iconPress={() => { p.setshowFilterModal(true) }} 
      array={p.array} 
      setarray={p.setarray}
       {...p} 
       bgcolor={'#e7ed'}
        logoPress={() => p.navigation.navigate('Home')} row={
      <Span fd='row' mt={19} >
        <P fs={10} mh={7} >موبایل تبلت</P>
        <P fs={10} mh={7} >هدفون هنزفیری</P>
        <P fs={10} mh={7} >لوازم جانبی</P>
      </Span>} src={require('../../assets/images/logo.png')} /> });
}, [])

  return (

    <SearchBar 
    bgcolor='#f9f' 
    Register={p.width > 395 ?true:false} 
    icon={'filter'} 
    src={p.width > 460 ?require('../assets/images/logo.png'):false}
     iconPress={()=>{p.setshowFilterModal(true)}} 
     array={p.array} 
     setarray={p.setarray} {...p}/>
  )
}
export default SearchInput



