import React from 'react'
import { Column, Form } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial'

const ForgetPass = (p) => {
  const getCodeForgetPass = () => p._user.getCodeForgetPass()
  _useEffect(() => { p.setgetCodeView(true) }, [])

  return (
    <Column f={1} style={{ backgroundColor: "#fff" }}>
        <Form w='85%' phore onClick={getCodeForgetPass} />
    </Column>
  )
}
export default ForgetPass