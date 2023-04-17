import React from 'react';
import { Column, Form } from '../../other/Components/Html'

export default function AddAdmin(p) {
  const setAdmin = () => p._admin.setAdmin()
  return (
    <Column f={1} >
      <Form phore webStyle={{ height: 'calc(100vh - 68px)' }} {...p} onClick={() => setAdmin()} />
    </Column>
  )
}