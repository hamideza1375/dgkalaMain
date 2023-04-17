import React, { memo } from 'react'
import { Column, Form, P, Press } from '../../other/Components/Html'

const GetCode = memo((p) => {

  p._user.loadPageTimer()
  const verifycode = () => p._user.verifycode()
  const getNewCode = () => p._user.getNewCode()

  return (
    <Column f={1}>
      <Form $code $codeAutoFocus onClick={verifycode} {...p} >
        <Press mt={5} onClick={() => { if (p.twoMinut === 0 && !p.showActivity) { getNewCode();  p.$input?.get('inputCodeId')?.focus() } }} style={{ cursor: (p.twoMinut === 0 ) ? 'pointer' : '' }} >
          <P color={p.twoMinut === 0  ? '#08f' : '#c1c1c1'}>ارسال دوباره کد {(p.twoMinut === 0 ) ? 'فعال' : p.twoMinut}</P>
        </Press>
      </Form>
    </Column>
  )
})

export default GetCode