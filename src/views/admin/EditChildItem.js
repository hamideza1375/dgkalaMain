import React from 'react'
import {Column, Form} from '../../other/Components/Html';

const EditChildItem = (p) => {
  p._admin.getSingleItem()
  const editChildItem = () => p._admin.editChildItem()

  return (
    <Column f={1} >
      <Form flexDirection={'row'} fourImage t pr i in3 in4 in5 in6 in7 in8 in9 in10 in11 in12 onClick={editChildItem} />
    </Column>
  )
}
export default EditChildItem
