import React from 'react'
import { FlatList, Column, P, Press, Py, Row, Card, Pfa } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial'
import spacePrice from '../../other/utils/spacePrice'
import convertColor from '../../other/utils/convertColor'
import _Alert from '../../other/utils/alert'
import { localhost } from '../../other/utils/axios/axios'


const ActiveOrder = (p) => {
  return (
    <Column f={1} >
      <Column f={1} style={{ backgroundColor: '#fad1' }} >
        <BeforePaymentFlatlist {...p} />
      </Column>
    </Column>
  )
}
export default ActiveOrder



const BeforePaymentFlatlist = (p) => {
  return (
    <Column fg={1} h='100%' border={[1, '#e5a']} >
      {Object.entries(p.productBasket).length ?
        <FlatList
        pt={7}
          column1={1} column2={1} column3={1} column4={2}
          column5={2} column6={3}
          keyExtractor={(data, index) => index.toString()}
          data={Object.entries(p.productBasket)}
          renderItem={({ item, index }) => (
            <Column /* mh='auto' */ mv={5} mh={6} minw={155} fg={1} h={250} ai='center' col2={{ marginHorizontal: 3 }} col1={{ marginHorizontal: 3 }}>
              <BeforePaymentCatd item={item} {...p} />
            </Column>)}
        />
        :
        <Column w='100%' ai='center' pt={50} >
          <Py>سبد خرید شما خالی هست</Py>
        </Column>
      }
    </Column>)
}



function BeforePaymentCatd(p) {
  const deleteProduct = () => p._client.deleteProduct(p.item[0])

  return (
    <Card
      imgClick={() => p.navigation.navigate('SingleProduct', { id: p.item[0] })}
      style={{ maxWidth: 550, width: '95%' }}
      dr='ltr'
      bgcolor='white'
      img={{uri:`${localhost}/upload/childItem/${p.item[1].imageUrl1}`}}
      imageStyle={{height:78,width:78}}
      headerRow={
        <Column minh='100%' h={25} ai='flex-start' >
          <P onClick={() => p.navigation.navigate('SingleProduct', { id: p.item[0] })} >{p.item[1].title}</P>
        </Column>}
      bodyRow={
        <Column minh='100%' >
          <Row ai='center' ><P fs={13} mv={4}>رنگ: </P><P fs={11} >{convertColor(p.item[1].color)}</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>قیمت: </P><P fs={11} >{spacePrice(p.item[1].price)}</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>گارانتی: </P><P fs={11} >{p.item[1].warranty} ماه</P></Row>
          <Row ai='center' w='100%' jc='space-between'>
            <Row ai='center' ><P fs={13} mv={4}>تعداد: </P><P fs={11} >{p.item[1].number} عدد</P></Row>
          </Row>
          <Row btw={1} pt={9} mb={-7} ai='center' ><P fs={13} > جمع: </P><Pfa mt={4} fs={15} color='#0c8'>{spacePrice(p.item[1].price * p.item[1].number)} تومان</Pfa></Row>
        </Column>}
      footerRow={<Press onClick={() => { deleteProduct() }} mt='auto' ai='center' jc='flex-end' pb={15}><P color='#c00'>حذف</P></Press>}
    />
  )
}





