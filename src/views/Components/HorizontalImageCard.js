import React from 'react'
import { Card, M_icon, Pfa, Py } from '../../other/Components/Html'
import spacePrice from '../../other/utils/spacePrice'


const HorizontalImageCard = () => {
  return (
    <Card 
      /* imgClick={() => { p.navigation.navigate('SingleItem', { id: item.itemId }) }} */
      style={{ minHeight: 135, margin: 5, width: '90%', alignSelf: 'center', marginRight: -3 }}
      headerRow={<Py ta='right'/*  onClick={() => { p.navigation.navigate('SingleItem', { id: item.itemId }) }} */ fs={15}>title</Py>}
      bodyRow={<M_icon color='#d00' name='delete' size={22} style={{ width: 20, textAlign: 'center' }} onClick={() => { removeSavedItem(item.itemId) }} />}
      img={require('../../other/assets/images/logo.png')}
      imageStyle={{ backgroundColor:'#fff' }}
      footer={<Pfa webStyle={{ fontSize: 13 }} nativeStyle={{ fontSize: 11 }} >{spacePrice(30000) + ' تومان'}</Pfa>}
      />
  )
}

export default HorizontalImageCard




// const HorizontalImageCard = () => {
//   return (
//     <Card
//       /* imgClick={() => { p.navigation.navigate('SingleItem', { id: item.itemId }) }} */
//       style={{ minHeight: 135, margin: 5, width: '90%', alignSelf: 'center', marginRight: -3 }}
//       header={<Py ta='right'/*  onClick={() => { p.navigation.navigate('SingleItem', { id: item.itemId }) }} */ fs={15}>title</Py>}
//       body={<M_icon color='#d00' name='delete' size={22} style={{ width: 20, textAlign: 'center' }} onClick={() => { removeSavedItem(item.itemId) }} />}
//       img={require('../../other/assets/images/logo.png')}
//       imageStyle={{ backgroundColor:'#fff' }}
//       footer={<Pfa webStyle={{ fontSize: 13 }} nativeStyle={{ fontSize: 11 }} >{spacePrice(30000) + ' تومان'}</Pfa>}
//       />
//   )
// }

// export default HorizontalImageCard