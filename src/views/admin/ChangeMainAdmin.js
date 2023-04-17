import React from 'react';
import { Column, Form } from '../../other/Components/Html'

export default function ChangeMainAdmin(p) {
  const sendChangeAdmin = () => p._admin.changeMainAdmin()
  return (
    <Column f={1} >
      <Form ph in1 {...p} onClick={() => sendChangeAdmin()} />
    </Column>
  )
}