import React from 'react'
import { Column, Form } from '../../other/Components/Html';
import Title from '../../other/utils/setTitle';

const EditCategory = (p) => {
  Title()
  p._admin.getSinleCategory()
  const editCategory = (id) => p._admin.editCategory(id)

  return (
    <Column f={1} >
      <Form t im edit onClick={() => { editCategory(); }} />
    </Column>
  )
}
export default EditCategory
