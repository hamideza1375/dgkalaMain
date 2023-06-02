import React from 'react'
import { Column, Form, P } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial'

export const ResetSpecification = (p) => {
  p._user.getUserSpecification()
  const resetSpecification = () => p._user.resetSpecification()
  _useEffect(() => { p.setgetCodeView(true) }, [])

  return (
    <Column f={1} gcolor='#fff'>
      <Column br={4} bgcolor={[1, 'silver']} p={12} f={1}>
        <Form autoComplete={false} flexDirection='row' f phore op p {...p} onClick={resetSpecification} >
          <P mt={10} w={110} pr={13} color='#09e' onClick={() => p.navigation.navigate('ForgetPass', { newCode: 'true' })} >فراموشی رمز عبور</P>
        </Form>
      </Column>
    </Column>
  )
}
export default ResetSpecification