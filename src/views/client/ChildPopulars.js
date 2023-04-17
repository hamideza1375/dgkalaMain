import React from 'react'
import { Column, FlatList } from '../../other/Components/Html'
import spacePrice from '../../other/utils/spacePrice'
import CardItem from './components/CardItem'

const ChildPopulars = (p) => {

  return (
    <Column f={1} >
      <Column fd='row-reverse' w='100%' f={1} mt={8} >
        <Column f={5} >
          <FlatlistPopulars {...p} />
        </Column>
      </Column>
    </Column>

  )
}

export default ChildPopulars



const FlatlistPopulars = (p) => {
  p._client.getPopulars()

  return (
    <FlatList
      column1={1} column2={2} column3={2} column4={2}
      column5={3} column6={4}
      data={p.populars}
      renderItem={({ item, index }) => (
        <Column /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }}>
          <CardItem item={item} spacePrice={spacePrice} onClick={() => { p.navigation.navigate('SingleItem', { id: item._id }) }}/>
        </Column>
      )}
    />
  )
}
