import React from 'react'
import { P, Row, Card2, Column, Icon, M_icon, Py, Scroll } from '../../other/Components/Html'
import { localhost } from '../../other/utils/axios/axios'
import _useEffect from '../../controllers/_initial'
const Profile = (p) => {
  p._user.getImageProfile()
  p._user.getUserSpecification()
  const sendImageProfile = () => p._user.sendImageProfile()

  _useEffect(() => {p.setgetCodeView(false)}, [])

  return (
    <Column f={1} jc='center' bgcolor='#f5f5f5' >
    <Column f={.95} bgcolor='#f8f8f8'>
      <Scroll as='flex-end' ai='center' bgcolor='#fff' w={320} h={400} minw={320} br={5} mt={5} >
        <Column w={250} h={350}>
          <Column pv={11} mt={10} ><Py>مشخصات حساب کاربری شما</Py></Column>
          <Card2 bgcolor={'#fff'} onClick={sendImageProfile}
            csrc={1.6} src={p.imageProfile ? { uri: `${localhost}/upload/profile/${p.imageProfile}` } : require('../../other/assets/images/logo.png')}
            coulumn1={
              <Column f={1} w='100%'>
                <Row mt={7} pr={12} f={1} ai='center'>
                  <Icon name='user-alt' size={13} />
                  <P> :</P>
                  <Py mt={3} maxw='85%' >{p.fullname}</Py>
                </Row>
              </Column>
            }
            coulumn2={
              <Column f={1} w='100%'>
                {
                  p.phoneOrEmail.includes('@') ?
                    <Row pr={12} mt={-7} f={1} ai='center'>
                      <M_icon name='email' size={14} />
                      <P> :</P>
                      <Py mt={3} maxw='85%'>{p.phoneOrEmail}</Py>
                    </Row>
                    :
                    <Row pr={12} mt={-7} f={1} ai='center'>
                      <Icon name='phone' size={13} />
                      <P> :</P>
                      <Py mt={3} maxw='85%'>{p.phoneOrEmail}</Py>
                    </Row>
                }
              </Column>
            }
          />
        </Column>
      </Scroll>
    </Column >
    </Column >
  )
}

export default Profile