import React from 'react'
import { Text, View } from 'react-native';
import { Button, Column, FlatList, P, Py, Row, Scroll } from '../../other/Components/Html';
import spacePrice from '../../other/utils/spacePrice';
import { sendQuitForSeller } from '../../services/adminService';


const QuitsForSeller = (p) => {
  p._admin.getQuitsForSeller()

  return (
    <Column f={1} >
      <FlatList
        data={p.allQuitsSeller}
        contentContainerStyle={{ paddingBottom: 55, }}
        renderItem={({ item, index }) => (
          <View
            key={item._id} style={{
              alignSelf: 'center',
              borderWidth: .3,
              borderColor: 'silver',
              width: '95%',
              marginVertical: 10,
              padding: 15,
              backgroundColor: '#fff',
              borderRadius: 4
            }}>
            <Card {...p} item={item} />
          </View>
        )} />
    </Column>
  )
}

export default QuitsForSeller
function Card(p) {

  const sendQuits = async (item) => {
    await sendQuitForSeller(item.productId, item.number, item._id)
    p.setallQuitsSeller(allQuitsSeller => allQuitsSeller.filter(q => q._id !== item._id))

  }

  return (
    <>
      <Scroll ccStyle={[{ flexDirection: 'row', flexWrap: 'wrap' }]} >

        <Row jc='center' ai='center' minw={150} minh={55} f={1} >
          <Py >برند : </Py><P >{p.item.brand}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} minh={55} f={1} >
          <Py >شماره تلفن: </Py><P >{p.item.phone}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} minh={55} f={1} >
          <Py >محصول : </Py><P>{p.item.product}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} minh={55} f={1} >
          <Py >تعداد : </Py><P >{spacePrice(p.item.number)}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} minh={55} f={1} >
          <Py >قیمت کل : </Py><P >{spacePrice(p.item.totalPrice)}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} minh={55} f={1} >
          <Button onClick={() => sendQuits(p.item)} h={30} fs={11} >پرداخت</Button>
        </Row>
      </Scroll>

    </>
  )
}

