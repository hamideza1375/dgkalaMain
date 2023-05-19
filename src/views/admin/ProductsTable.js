import React, { useState } from 'react';
import { Button, Column } from '../../other/Components/Html';
import { Table } from '../../other/Components/Html';

const ProductsTable = (p) => {
  p._admin.getProductsTable()

  return (
    <Column f={1}>
      <Button h={40} w='98%' alignSelf='center' mv={5} onPress={() => p.navigation.navigate("CreateProduct", { id: p.route.params.id, sellerId: p.route.params.sellerId })}>ساخت محصول </Button>
      <Column f={1} w='95%' ai='center' as='center' >
        <ChildItemTable {...p} />
      </Column>
    </Column>
  )
}
export default ProductsTable




function ChildItemTable(p) {
  const [productsTable, setproductsTable] = useState([])
  const deleteProduct = (id) => p._admin.deleteProduct(id)
  const changeAvailable = (id) => p._admin.changeAvailable(id)


  return (
    <Table
      pageLimit={15}
      color={['#fff', '#eee', 'black']}
      border={[1, '#ccc']}
      header={['تخفیف', 'حذف', 'موجودیت', 'ویرایش', 'قیمت', 'عنوان']}
      body={['off', '❌', 'موجودیت', '📝', 'price', 'title']}
      btn1={'#e63'}
      btn1onClick={() => { productsTable[0]?._id && p.navigation.navigate('SetOffer', { id: productsTable[0]._id }) }}
      btn2={'#e33'}
      btn2onClick={() => { productsTable[0]?._id && deleteProduct(productsTable[0]._id) }}
      btn3={'#0c4'}
      btn3onClick={() => { productsTable[0]?._id && changeAvailable(productsTable[0]._id) }}
      btn4={'#09d'}
      btn4onClick={() => { productsTable[0]?._id && p.navigation.navigate('EditProduct', { id: productsTable[0]._id }) }}
      btn3Opacity
      titleClick={() => { productsTable[0]?._id && p.navigation.navigate('SingleProduct', { id: productsTable[0]._id }) }}
      object={p.childItem}
      setobject={setproductsTable}
    />)
}
