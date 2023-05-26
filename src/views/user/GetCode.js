import React, { memo, useEffect } from 'react'
import { BackHandler, Platform } from 'react-native'
import { Column, Form, P, Press } from '../../other/Components/Html'

const GetCode = memo((p) => {

  p._user.loadPageTimer()
  const verifycode = () => p._user.verifycode()
  const getNewCode = () => p._user.getNewCode()


  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener("hardwareBackPress", () => {
        if (p.route.name === 'GetCode') {
          return true
        }
      })
    }
    return () => Platform.OS === 'android' && BackHandler.removeEventListener('hardwareBackPress')
  })


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