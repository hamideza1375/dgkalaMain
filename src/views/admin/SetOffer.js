import React from 'react'
import {Column, Form} from '../../other/Components/Html';

const SetOffer = (p) => {
  p._admin.getSingleProduct()
  const setOffer = () => p._admin.setOffer()

  return (
    <Column f={1} >
      <Form flexDirection={'row'} offer onClick={setOffer} />
    </Column>
  )
}
export default SetOffer
