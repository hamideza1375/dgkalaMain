import React from 'react'
import { Column, Form } from '../../other/Components/Html';

const CreateChildItem = (p) => {
  const createChildItem = () => p._admin.createChildItem()
  return (
    <Column f={1} >
      <Form flexDirection={'row'} fourImage t pr i in3 in4 in5 in6 in7 in8 in9 in10 in11 in12 onClick={createChildItem} />
    </Column>
  )
}
export default CreateChildItem
// in2 = brand
// in3 = ram
// in4 = cpuCore
// in5 = camera
// in6 = storage
// in7 = waranty
// in8 = color
// in9 = display
// in10 = operatingSystem
// in11 battery
// in12 network