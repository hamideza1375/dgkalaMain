import React, { useEffect } from 'react'
import {Column, Form} from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial'
import { BackHandler, Platform } from 'react-native'

export const ResetPass = (p) => {
   const resetPassword =()=> p._user.resetPassword()


   _useEffect(() => { p.setgetCodeView(false) }, [])

   _useEffect(() => {
    const backHandler = Platform.OS === 'android' && BackHandler.addEventListener('hardwareBackPress', () => { return true });
    return () => { (Platform.OS === 'android' && backHandler) && backHandler.remove() }
  }, [])


  useEffect(() => {
    if (Platform.OS === 'web') {
      if (window.location.search)
        history.pushState(null, null, window.location.href)
    }
  })

  return (
    // <WebView style={styles.container2} source={{ uri: props.route.params.uri }} />
    <Column f={1} gcolor='#fff'>
      <Column br={4} bgcolor={[1,'silver']} p={12} f={1}>
        <Form autoComplete={false} p cp {...p} onClick={resetPassword} >
        </Form>
      </Column>
    </Column>
  )
}
export default ResetPass