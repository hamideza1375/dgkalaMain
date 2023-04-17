import React from 'react'
import InputImage from '../../other/Components/formComponent/InputImage'
import { Column, Form, Icon, M_icon, P, Press, Row } from '../../other/Components/Html'
import { imagePicker } from '../../other/utils/imagePicer'
import { truncate } from '../../other/utils/truncate'

const SendTicket = (p) => {

  const sendNewTicket = () => p._user.sendNewTicket()

  return (
    <Column f={1}>
      <Column style={{ transform: [{ scaleY: .8 }] }} >
        <Form top={0} mt={0} pb={0} t m plackTextTop={false} onClick={sendNewTicket} {...p} >
          <Row w='100%' h='100%' ai='center' jc='space-between' >

            <Column w={160} pr={5} ml={5}  >
              <Press w={160} bgcolor='silver' br={5} fd='row' jc='space-around' h={40} ai='center' onClick={() => { imagePicker().then(res => { p.setimageUrl(res) }) }} >
                <Icon name='image' size={30} />
                <P fs={9}>انتخاب تصویر</P>
                <P ta='center' w={55} pt={7} bgcolor={'#fff'} h={30} fs={9}>{truncate(p.imageUrl.name, 9, false)}</P>
              </Press>
            </Column>

            <Column bgcolor={'#eee'} w={90} pr={5} ml={5}  >
              <Press w={80} bgcolor='#f22' br={5} fd='row' h={40} ai='center' onClick={() => { p.setimageUrl(''); p.toast.success('تصویر حذف شد', '✔') }} >
                <M_icon name='delete' size={30} />
                <P fs={9}>حذف تصویر</P>
              </Press>
            </Column>
          </Row>

        </Form>

      </Column>
    </Column>
  )
}

export default SendTicket