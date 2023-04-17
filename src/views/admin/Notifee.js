import React from 'react';
import _useEffect from '../../controllers/_initial';
import { Column, Form, M_icon, P, Press } from '../../other/Components/Html'

const Notifee = (p) => {
  _useEffect(() => { return () => { p.settitle(''); p.setinfo('') } }, [])

  const createNotifee = () => p._admin.createNotification()

  const deleteNotification = () => p._admin.deleteNotification()

  return (
    <Column f={1} >
      <Form webStyle={{ height: 'calc(100vh - 68px)' }} t m {...p} onClick={createNotifee} >
        <Column w='100%' h='100%' pr={10} jc='center' >
          <Press onClick={deleteNotification} fd='row' bgcolor='#a00a' w={120} br={3} h={30} ai='center' jc='center' >
            <P fs={12} color='white' >حذف نوتیفیکیشن</P>
            <M_icon name='delete' size={19} color='red' />
          </Press>
        </Column>
      </Form>
    </Column>
  )
}
export default Notifee
