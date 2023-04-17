import React from 'react'
import { Column, Form } from '../../other/Components/Html'

const AddSeller = (p) => {

  return (
    <Column f={1} >
      <Form ph in2 /*brand*/ onClick={()=>p._admin.createSeller()} />
    </Column>
  )
}

export default AddSeller