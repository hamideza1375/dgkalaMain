import React from 'react'
import { Column, Form } from '../../other/Components/Html'

const CreateSlider = (p) => {

  return (
    <Column f={1} >
      <Form slider flexDirection={'row'} onClick={()=>p._admin.createSlider()} />
    </Column>
  )
}

export default CreateSlider