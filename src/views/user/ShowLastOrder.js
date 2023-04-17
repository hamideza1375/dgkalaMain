import React from 'react'
import { Column, FlatList, P, Row } from '../../other/Components/Html'
import moment from 'moment-jalaali';
import { Text, View } from 'react-native';
import spacePrice from '../../other/utils/spacePrice';

const CartAllPayment = (p) => {

  const containerColumn = { borderBottomWidth: .2, borderColor: 'silver', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }

  return (
    p.item?.fullname ?
      <>
        <Row style={[containerColumn, { paddingVertical: 0, paddingBottom: 20, paddingTop:4}]} >
          <P  mb={-4}><P style={[{ fontWeight: 'bold', PAlign: 'left' }]} >نام: </P>{p.item.fullname}</P>
          <Row mb={-4} style={{ flexDirection: 'row' }}>
            <P >شماره تلفن: </P><P  >{p.item.phone}</P></Row>
        </Row>
        <Row style={{ borderBottomWidth: .2, borderColor: 'silver', padding: 15, width: '100%' }} >
          <P   ><P >آدرس: </P >{p.item.address}</P>
        </Row>
        <Row style={containerColumn} >
          <P  ><P style={{ fontWeight: 'bold' }} >پلاک: </P>{p.item.plaque}</P>
          <P  ><P style={{ fontWeight: 'bold' }} >طبقه: </P>{p.item.unit}</P>
          <P  ><P style={{ fontWeight: 'bold' }} >شماره: </P>{p.item.id}</P>
        </Row>

        <Row style={{ borderBottomWidth: .2, borderColor: 'silver', padding: 15, width: '100%' }} >
          <P   ><P >اسامی سفارش: </P >{p.item.titles}</P>
        </Row>

        <Row style={[containerColumn,{borderBottomWidth:0, paddingBottom:5}]} >
          <P  ><P style={{ fontWeight: 'bold' }} >قیمت: </P>{spacePrice(p.item.price)} تومان</P>
          <P style={{ color: '#ababab', }}>{moment(p.item.date).format('jYYYY/jM/jD hh:mm')}</P>
          {/* <P style={{ color: '#ababab', }}>{new Date().toString().split(" ")[4]}</P> */}
        </Row>
      </>
      :
      <></>
  )
}





const ShowLastOrder = (p) => {

  p._user.getLastPayment()

  return (
    <Column f={1} >
      <FlatList
        data={p.lastPayment}
        renderItem={({ item, index }) => (
          <View key={item._id} style={{
            alignSelf: 'center',
            borderWidth: .3,
            borderColor: 'silver',
            width: '95%',
            marginVertical: 10,
            padding: 15,
            backgroundColor: '#fff',
            borderRadius: 4
          }}>
            <CartAllPayment {...p} item={item} />
          </View>
        )}
      />
    </Column>
  )
}

export default ShowLastOrder