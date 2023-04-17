import React from 'react'
import {Column, Form} from '../../other/Components/Html'

export const ResetPass = (p) => {
   const resetPassword =()=> p._user.resetPassword()
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