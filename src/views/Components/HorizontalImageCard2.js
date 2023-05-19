import React from 'react'
import { Card, Column, P, Press, Row } from '../../other/Components/Html'
import spacePrice from '../../other/utils/spacePrice'

const HorizontalImageCard2 = () => {
  return (
    <Card alert
      // imgClick={() => p.navigation.navigate('SingleProduct', { id: p.item[0] })}
      style={{ maxWidth: 550, width: '90%',height:245, marginRight: -3, marginBottom:55 }}
      dr='ltr'
      bgcolor='white'
      img={require('../../other/assets/images/logo.png')}
      imageStyle={{height:78,width:78}}
      headerRow={
        <Column minh='100%' h={25} ai='flex-start' >
          <P /* onClick={() => p.navigation.navigate('SingleProduct', { id: p.item[0] })} */ >title</P>
        </Column>}
      bodyRow={
        <Column minh='100%' >
          <Row ai='center' ><P fs={13} mv={4}>رنگ: </P><P fs={11} >red</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>قیمت: </P><P fs={11} >{spacePrice(35000)}</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>گارانتی: </P><P fs={11} >77 ماه</P></Row>
          <Row ai='center' w='100%' jc='space-between'>
            <Row ai='center' ><P fs={13} mv={4}>تعداد: </P><P fs={11} >22 عدد</P></Row>
          </Row>
          <Row btw={1} pt={9} mb={-7} ai='center' ><P fs={13} >قیمت کل: </P><P fs={11} color='#0c8'>{spacePrice(35000)}</P></Row>
        </Column>}
      footerRow={<Press /* onClick={() => { deleteProduct() }} */ mt='auto' ai='center' jc='flex-end' pb={15}><P color='#c00'>حذف</P></Press>}
    />  )
}

export default HorizontalImageCard2