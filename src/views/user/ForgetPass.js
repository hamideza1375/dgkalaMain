import React from 'react'
import { Column, Form } from '../../other/Components/Html'

const ForgetPass = (p) => {
  const getCodeForgetPass = () => p._user.getCodeForgetPass()

  return (
    <Column f={1} style={{ backgroundColor: "#fff" }}>
        <Form w='85%' phore onClick={getCodeForgetPass} />
    </Column>
  )
}
export default ForgetPass