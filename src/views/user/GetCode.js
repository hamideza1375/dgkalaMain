import React, { memo, useEffect } from 'react'
import { BackHandler, Platform } from 'react-native'
import { Column, Form, P, Press } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial'
import {getNewCode as _getNewCode} from '../../services/userService'
import { timerThreeMinut } from '../../other/utils/timerThreeMinuts'
import AsyncStorage from '@react-native-async-storage/async-storage'

const GetCode = memo((p) => {

  _useEffect(() => {
      (async () => {
        const localDate = await AsyncStorage.getItem('localDate')
        if (!localDate || (localDate > new Date().getTime())) {
          timerThreeMinut(p.settwoMinut, (interval) => p.timerInterwal.current = interval)
        } else p.settwoMinut(0)
      })()
    return () => { p.settwoMinut(0); p.setcode(''); p.timerInterwal.current && clearInterval(p.timerInterwal.current) }
  }, [])


  
  const verifycode = () => p._user.verifycode()
  const getNewCode = async() => {
    await _getNewCode(p.route.params?.newCode)
    await AsyncStorage.removeItem('localDate')
    timerThreeMinut(p.settwoMinut, (interval) => p.timerInterwal.current = interval)
  }

  _useEffect(() => {
    if (!p.getCodeView) {
      if (Platform.OS !== 'web') { p.navigation.dispatch(p.navigation.navigate('Client', { screen: 'Home' })) }
      else { location.replace(location.origin + '/') /* location.pathname = '/'  */}
    }

  }, [])


  _useEffect(() => {
    const backHandler = Platform.OS === 'android' && BackHandler.addEventListener('hardwareBackPress', () => { return true });
    return () => { (Platform.OS === 'android' && backHandler) && backHandler.remove() }
  }, [])


  useEffect(() => {
    if (Platform.OS === 'web') {
      if (p.route.name === 'GetCode')
        if (window.location.search)
          history.pushState(null, null, window.location.href)
    }
  })

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