import React, { memo, useEffect } from 'react'
import { BackHandler, Platform } from 'react-native'
import { Column, Form, P, Press } from '../../other/Components/Html'
import { CommonActions } from '@react-navigation/native'

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
  }, [])


  useEffect(() => {
    p.navigation.dispatch(p.navigation.navigate('GetCode'));
    return()=>p.navigation.dispatch(p.navigation.navigate('GetCode'));
  }, [])
  



  // p.navigation.push('Login')

  // useEffect(() => {
  //   if (Platform.OS === 'web') {
  //     history.pushState(null, null, window.location.pathname)
  //   }
  // })

  // useEffect(() => {
  //   p.navigation.dispatch(
  //     CommonActions.navigate({ 
  //        name: 'GetCode' 
  //     })
  //   );
  // }, [])


  // p.navigation.dispatch(
  //   CommonActions.reset({
  //     index: 1,
  //     routes: [
  //       { name: 'Login' },
  //       {
  // name: 'GetCode' ,
  // params: { user: 'jane' }
  // },
  //     ],
  //   })
  // );

  // p.navigation.dispatch(CommonActions.goBack());


  return (
    <Column f={1}>
      <Form $code $codeAutoFocus onClick={verifycode} {...p} >
        <Press mt={5} onClick={() => { if (p.twoMinut === 0 && !p.showActivity) { getNewCode(); p.$input?.get('inputCodeId')?.focus() } }} style={{ cursor: (p.twoMinut === 0) ? 'pointer' : '' }} >
          <P color={p.twoMinut === 0 ? '#08f' : '#c1c1c1'}>ارسال دوباره کد {(p.twoMinut === 0) ? 'فعال' : p.twoMinut}</P>
        </Press>
      </Form>
    </Column>
  )
})

export default GetCode