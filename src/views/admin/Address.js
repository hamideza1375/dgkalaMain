import React from 'react'
import moment from 'moment-jalaali';
import { Column, FlatList, Button, P } from '../../other/Components/Html';
import spacePrice from '../../other/utils/spacePrice';
import linking from '../../other/utils/linking';


const addressMap = new Map()

const Address = (p) => {
  p._admin.getAllAddress()

  return (
    <Column f={1} >
      <FlatList
        cacheId={'flatlistAddress'}
        data={p.allAddress}
        contentContainerStyle={{ paddingBottom: 55, }}
        renderItem={({ item, index }) => (
          <Column
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
            <CardAddress {...p} addressMap={addressMap} item={item} />
          </Column>
        )} />
    </Column>
  )
}

export default Address










function CardAddress(p){
  const postedOrder = (_id) => p._admin.postedOrder(_id)
  const postQueue = (_id) => p._admin.postQueue(_id)

  const lineStyle = { textDecorationLine: p.item.queueSend ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.item.queueSend ? '#aaa' : 'black' }
  const lineStyle2 = { textDecorationLine: p.item.queueSend ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.item.queueSend ? '#aaa' : 'black', fontWeight: 'bold', textAlign: 'left' }
  const containerColumn = { borderBottomWidth: .2, borderColor: 'silver', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }


  return (
    <>
      <Column style={[containerColumn, { paddingVertical: 0, paddingBottom: 20, paddingTop:4 }]} >
        <P mb={-4} style={lineStyle}><P style={[{ fontWeight: 'bold', textAlign: 'left' }]} >نام: </P>{p.item.fullname}</P>
        <Column mb={-4} style={{ flexDirection: 'row' }}>
          <P style={lineStyle2} >شماره تلفن: </P><P onClick={() => linking('tel:p.item.phone')} style={lineStyle} >{p.item.phone}</P></Column>
      </Column>
      <Column style={{ borderBottomWidth: .2, borderColor: 'silver', padding: 15, width: '100%' }} >
        <P style={lineStyle}  ><P style={lineStyle2} >آدرس: </P >{p.item.address}</P>
      </Column>
      <Column style={containerColumn} >
        <P style={lineStyle} ><P style={{ fontWeight: 'bold' }} >پلاک: </P>{p.item.plaque}</P>
        <P style={lineStyle} ><P style={{ fontWeight: 'bold' }} >طبقه: </P>{p.item.unit}</P>
        {p.item.postalCode?<P style={lineStyle} ><P style={{ fontWeight: 'bold' }} >کد پستی: </P>{p.item.postalCode}</P>:<></>}
        {/* <P style={lineStyle} ><P style={{ fontWeight: 'bold' }} >شماره: </P>{p.item.id}</P> */}
      </Column>

      <Column style={{ borderBottomWidth: .2, borderColor: 'silver', padding: 15, width: '100%' }} >
        <P style={lineStyle}  ><P style={lineStyle2} >اسامی سفارش: </P >{p.item.titles}</P>
      </Column>

      {p.item.description && <Column style={{ borderBottomWidth: .2, borderColor: 'silver', padding: 15, width: '100%' }} >
        <P style={lineStyle}  ><P style={lineStyle2} >توضیحات سفارش: </P >{p.item.description}</P>
      </Column>}

      <Column style={containerColumn} >
        <P style={lineStyle} ><P style={{ fontWeight: 'bold' }} >قیمت: </P>{spacePrice(p.item.price)} تومان</P>
        <P style={{ color: '#ababab', }}>{moment(p.item.date).format('jM/jD hh:mm')}</P>
        {/* <P style={{ color: '#ababab', }}>{p.item.createdAt.split(" ")[4]}</P> */}
      </Column>
      <Column style={{ paddingTop: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-around', }} >
        <Button outline bgcolor={!p.item.queueSend ? 'orange' : 'red'} h={35} fs={12} p={0} onClick={() => { postQueue(p.item._id); }} > {!p.item.queueSend ? 'در صف ارسال ' : 'خروج از صف'}</Button>
        <Button outline bgcolor='green' h={35} fs={12} p={0} onClick={() => { postedOrder(p.item._id) }} >ارسال شد</Button>
        {p.item.latlng?.lat ? <Button outline bgcolor='blue' h={35} fs={12} p={0} onClick={() => { p.navigation.navigate('ShowLatLngOnMap', { latlng: JSON.stringify(p.item.latlng) }) }} >نمایش</Button> : <></>}
      </Column>
    </>
  )
}



