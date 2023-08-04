import React from 'react'
import share from '../../other/utils/share'
import { Icon, Img, Py, Column, Row, Pfa, P } from '../../other/Components/Html'
import { localhost } from '../../other/utils/axios/axios'

const topCol = {flexDirection: 'row-reverse', width:'98%', alignItems: 'flex-end',}
const relation ={justifyContent: 'slex-end'}
const Footer = () => {
  return (
    <Column fd='row' p={10} bgcolor='#0d1e2d' fw='wrap' jc='flex-end'>
      <Column fg={7} f={1} minw={150}>
        <Column >
          <Column border={[0, 'white']} bbw={1} mr={9} pb={5} w={'85%'} as='flex-start' >
            <Py color='#fb0' >مجوز ها</Py>
          </Column>
          <Column w={70} h={70} mr={7} mt={12} border={[1, 'white']} >
            <Img f={1} src={{ uri: `${localhost}/images/etemadElectronic.png` }} />
          </Column>
        </Column>
        <Column border={[0, 'white']} mt={10} btw={1} w={'95%'} pb={4} pt={8} mr={9} >
          <P fs={12} color='#fff' >درباره ی ما</P>
        </Column>
      </Column>

      <Column minw={125} mh={'1%'} ai='center' col1={topCol} col2={topCol} >
        <Column minw={125} h={45} fd='row' jc='flex-end'>
          <Column p={10} pr={0} ai='center'>
            <Icon name='instagram' color='#a22' size={30} />
          </Column>
          <Column p={10} ai='center'>
            <Icon name='telegram' color='#55a' size={30} />
          </Column>
          <Column p={10} pl={0} ai='center'>
            <Icon color='#bbb' name='share-alt' size={30} onClick={async () => { share('http://localhost:3000', 'دیجیکالا') }} />
          </Column>
        </Column>

        <Column f={1} jc='flex-start' fd='column-reverse' col1={relation} col2={relation} >

        <Row mt={8} ai='center' >
            <P minw={35} color='white'>ایمیل: </P><Pfa minw={125} f={1} color='white' >email@email.com</Pfa>
          </Row>

          <Row mt={8} ai='center' >
            <P color='white'>تماس: </P><Pfa color='white'>  090999999</Pfa>
          </Row>



        </Column>

      </Column>
    </Column>
  )
}

export default Footer