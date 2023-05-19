import React from 'react'
import { Card, Column, FlatList, M_icon, Pfa, Py } from '../../other/Components/Html'
import { localhost } from '../../other/utils/axios/axios'
import spacePrice from '../../other/utils/spacePrice'


const SavedProducts = (p) => {

  p._user.getSavedProducts()
  const removeSavedProduct = (itemId) => p._user.removeSavedProduct(itemId)

  return (
    <Column f={1}>
      <FlatList
        data={p.savedItems}
        renderItem={({ item, index }) => (
          <Card 
          imgClick={()=>{p.navigation.navigate('SingleProduct',{id:item.itemId})}}
           style={{minHeight:135, margin:5, width:'90%', alignSelf:'center', marginRight:-3}}
            headerRow={<Py ta='right' onClick={()=>{p.navigation.navigate('SingleProduct',{id:item.itemId})}} fs={15}>{item.title}</Py>}
            bodyRow={<M_icon color='#d00' name='delete' size={22} style={{ width:20, textAlign:'center'}} onClick={() => { removeSavedProduct(item.itemId) }} />}
            img={{uri:`${localhost}/upload/childItem/${item.imageUrl}`}}
            footer={<Pfa webStyle={{fontSize:12, marginRight:-5}} nativeStyle={{fontSize:11}} >{spacePrice(String(item.price).padEnd(4)) + ' تومان'}</Pfa>}
            />
        )}
      />
    </Column>
  )
}

export default SavedProducts