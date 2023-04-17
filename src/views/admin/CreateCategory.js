import React from 'react'
import { Column, Form } from '../../other/Components/Html';

const CreateCategory = (p) => {

  return (
    <Column f={1} >
      <Form t im onClick={() => { p._admin.createCategory() }} />
    </Column>
  )
}
export default CreateCategory