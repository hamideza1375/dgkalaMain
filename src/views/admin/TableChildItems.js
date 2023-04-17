import React, { useState } from 'react';
import { Button, Column } from '../../other/Components/Html';
import { Table } from '../../other/Components/Html';

const TableChildItems = (p) => {
  p._admin.getChildItemsTable()

  return (
    <Column f={1}>
      <Button h={40} w='98%' alignSelf='center' mv={5} onPress={() => p.navigation.navigate("CreateChildItem", { id: p.route.params.id, sellerId: p.route.params.sellerId })}>ساخت محصول </Button>
      <Column f={1} w='95%' ai='center' as='center' >
        <ChildItemTable {...p} />
      </Column>
    </Column>
  )
}
export default TableChildItems





function ChildItemTable(p) {
  const [childItemsTable, setchildItemsTable] = useState([])

  const deleteChildItem = (id) => p._admin.deleteChildItem(id)
  const changeAvailable = (id) => p._admin.changeAvailable(id)

  return (
    <Table
      pageLimit={5}
      color={['#fff', '#eee', 'black']}
      border={[1, '#ccc']}
      header={['تخفیف', 'حذف', 'موجودیت', 'ویرایش', 'قیمت', 'عنوان']}
      body={['off', '❌', 'موجودیت', '📝', 'price', 'title']}
      btn1={'#e63'}
      btn1onClick={() => { p.navigation.navigate('SetOffer', { id: childItemsTable[0]._id }) }}
      btn2={'#e33'}
      btn2onClick={() => { deleteChildItem(childItemsTable[0]._id) }}
      btn3={'#0c4'}
      btn3onClick={() => { changeAvailable(childItemsTable[0]._id) }}
      btn4={'#09d'}
      btn4onClick={() => { p.navigation.navigate('EditChildItem', { id: childItemsTable[0]._id }) }}
      btn3Opacity
      titleClick={() => { p.navigation.navigate('SingleItem', { id: childItemsTable[0]._id }) }}
      object={p.childItem}
      setobject={setchildItemsTable}
    />)
}
