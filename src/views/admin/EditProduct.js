import React from 'react'
import {Column, Form} from '../../other/Components/Html';

const EditProduct = (p) => {
  p._admin.getSingleProduct()
  const editProduct = () => p._admin.editProduct()

  return (
    <Column f={1} >
      <Form flexDirection={'row'} fourImage t pr i in3 in4 in5 in6 in7 in8 in9 in10 in11 in12 onClick={editProduct} />
    </Column>
  )
}
export default EditProduct
