import React from 'react'
import { Column, Form } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial'

const Register = (p) => {
  const getCodeForRegister = () => p._user.getCodeForRegister()
  _useEffect(() => { p.setgetCodeView(true) }, [])

  return (
    <Column f={1} ai='center' jc='center' bgcolor='#fafafa'>
      <Column w='90%' f={.98} border={[1, 'silver']} p={8} sh={{ r: 7, o: .3, c: '#aaa' }}>
        <Column w='100%' f={1} border={[1, 'silver']} sh={{ r: 5, o: .2, c: '#aaa' }} >
          <Form f phore p ch autoComplete={false} bgcolor='#fff' onClick={!p.showActivity ? getCodeForRegister : () => { }} {...p} />
        </Column>
      </Column>
    </Column>
  )
}

export default Register