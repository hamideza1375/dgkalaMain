import React from 'react'
import { Column, FlatList } from '../../other/Components/Html'
import spacePrice from '../../other/utils/spacePrice'
import CardItem from './components/CardItem'

const Products = (p) => {

  return (
    <Column f={1} >
      <Column fd='row-reverse' w='100%' f={1} mt={8} >
        <Column f={5} >
          <FlatlistChild {...p} />
        </Column>
      </Column>
    </Column>
  )
}

export default Products



function FlatlistChild(p){
  p._client.getProducts()
  // const [product, dispatch] = useReducer(reducerGetProducts, []);
  // useEffect(() => {actionGetProducts(dispatch, "GETPRODUCT", p.route)}, [])
  return (
    <FlatList
    cacheId={p.route.params.id}
     column1={1} column2={2} column3={2} column4={3}
      column5={4} column6={5}
      data={p.childItem}
      renderItem={({ item, index }) => (
        <Column 
        col1={{ marginHorizontal: 1, width:'99%'  }}
        col2={{ marginHorizontal: 2, width:'48%' }}
        col3={{ width:'48%' }}
        col4={{ width:'30%' }}
        col5={{ width:'22%' }}
        col6={{ width:'18%' }}
        mr='auto' ml='auto' h={260} fg={1} maxw={350}
        >
          <CardItem item={item} spacePrice={spacePrice} onClick={() => { p.navigation.navigate('SingleProduct', { id: item._id, title:item.title }) }} />
        </Column>)}
    />
  )
}
