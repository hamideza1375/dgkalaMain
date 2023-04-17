import React, { useState } from 'react';
import { Button, Column } from '../../other/Components/Html';
import s from "./Admin.module.scss"
import { Table } from '../../other/Components/Html';

const TableCategory = function (p) {
  p._admin.getCategory()

  return (
    <Column f={1} ai='center' >
      <Button mt={2} h={40} w='90%' onPress={() => p.navigation.navigate("CreateCategory",{id:p.route.params.id})}>ساخت دسته ی اغذیه</Button>
      <Column class={s.containTable} >
          <CategoryTable {...p} />
      </Column>
    </Column>
  )
}

export default TableCategory








function CategoryTable (p) {

  const [categoryTable, setcategoryTable] = useState([])
  const deleteCategory = (id) => p._admin.deleteCategory(id)

  return (
    <Table
      color={['#fff', '#eee', 'black']}
      border={[1, '#ccc']}
      header={['حذف', 'ویرایش', ' نمایش محصولات', 'عنوان']}
      body={['❌', '📝', 'نمایش', 'title']}
      btn1={'#d00'}
      btn1onClick={() => { deleteCategory(categoryTable[0]._id) }}
      btn2={'orange'}
      btn2onClick={() => { p.navigation.navigate('EditCategory', { title: categoryTable[0].title, id: categoryTable[0]._id }) }}
      btn3={'#09f'}
      btn3onClick={() => { p.navigation.navigate('Sellers', { title: categoryTable[0].title, id: categoryTable[0]._id }) }}
      object={p.category}
      setobject={setcategoryTable}
    />
  )
}
