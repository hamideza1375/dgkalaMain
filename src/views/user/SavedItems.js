import React from 'react'
import { Card, Column, FlatList, M_icon, Pfa, Py } from '../../other/Components/Html'
import { localhost } from '../../other/utils/axios/axios'
import spacePrice from '../../other/utils/spacePrice'


const SavedItems = (p) => {

  p._user.getSavedItem()
  const removeSavedItem = (itemId) => p._user.removeSavedItem(itemId)

  return (
    <Column f={1}>
      <FlatList
        data={p.savedItems}
        renderItem={({ item, index }) => (
          <Card 
          imgClick={()=>{p.navigation.navigate('SingleItem',{id:item.itemId})}}
           style={{minHeight:135, margin:5, width:'90%', alignSelf:'center', marginRight:-3}}
            headerRow={<Py ta='right' onClick={()=>{p.navigation.navigate('SingleItem',{id:item.itemId})}} fs={15}>{item.title}</Py>}
            bodyRow={<M_icon color='#d00' name='delete' size={22} style={{ width:20, textAlign:'center'}} onClick={() => { removeSavedItem(item.itemId) }} />}
            img={{uri:`${localhost}/upload/childItem/${item.imageUrl}`}}
            imageStyle={{marginRight:-20}}
            footerRow={<Pfa webStyle={{fontSize:13}} nativeStyle={{fontSize:11}} >{spacePrice(String(item.price).padEnd(4)) + 'تومان'}</Pfa>}
            />
        )}
      />
    </Column>
  )
}

export default SavedItems