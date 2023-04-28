import React from 'react'
import { P, Row, Card2, Column, Icon, M_icon, Py } from '../../other/Components/Html'

const ProfileCard = () => {

  return (

    <Card2 bgcolor={'#faf'}
      csrc={1.5} src={require('../../other/assets/images/logo.png')}
      coulumn1={
        <Column f={1} w='100%'>
          <Row mt={7} pr={12} f={1} ai='center'>
            <Icon name='user-alt' size={13} />
            <P> :</P>
            <Py mt={3} maxw='85%' >fullname</Py>
          </Row>
        </Column>
      }
      coulumn2={
        <Column f={1} w='100%'>
          {/* {  p.phoneOrEmail.includes('@') ?
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
           } */}

          <Row pr={12} mt={-7} f={1} ai='center'>
            <Icon name='phone' size={13} />
            <P> :</P>
            <Py mt={3} maxw='85%'>reza@gmail.com</Py>
          </Row>

        </Column>
      }
    />

  )
}

export default ProfileCard