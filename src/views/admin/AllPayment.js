import React from 'react'
import moment from 'moment-jalaali';
import { Column, FlatList, P } from '../../other/Components/Html';
import spacePrice from '../../other/utils/spacePrice';

const addressMap = new Map()

const Address = (p) => {
	p._admin.getAllPaymentSuccessFalseAndTrue()

	return (
		<Column f={1} >
			<FlatList
      cacheId={'allpayment'}
				data={p.allPaymentSuccessFalseAndTrue}
				ccStyle={{ paddingBottom: 55, }}
				renderItem={({ item, index }) => (
					<Column key={item._id} style={{
						alignSelf: 'center',
						borderWidth: .3,
						borderColor: 'silver',
						width: '95%',
						marginVertical: 10,
						padding: 15,
						backgroundColor: '#fff',
						borderRadius: 4
					}}>
						<CardAllPayment {...p} addressMap={addressMap} item={item} />
					</Column>
				)} />
		</Column>
	)
}

export default Address







function CardAllPayment(p){

  const containerColumn = { borderBottomWidth: .2, borderColor: 'silver', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }

  return (
    <>
      <Column style={[containerColumn, { paddingVertical: 0, paddingBottom: 20, paddingTop:4 }]} >
        <P mb={-4} ><P style={[{ fontWeight: 'bold', textAlign: 'left' }]} >نام: </P>{p.item.fullname}</P>
        <Column mb={-4} style={{ flexDirection: 'row' }}>
          <P >شماره تلفن: </P><P  >{p.item.phone}</P></Column>
      </Column>
      <Column style={{ borderBottomWidth: .2, borderColor: 'silver', padding: 15, width: '100%' }} >
        <P   ><P >آدرس: </P >{p.item.formattedAddress}</P>
      </Column>
      <Column style={containerColumn} >
        <P  ><P style={{ fontWeight: 'bold' }} >پلاک: </P>{p.item.plaque}</P>
        <P  ><P style={{ fontWeight: 'bold' }} >طبقه: </P>{p.item.unit}</P>
        <P  ><P style={{ fontWeight: 'bold' }} >شماره: </P>{p.item.id}</P>
      </Column>

      <Column style={{ borderBottomWidth: .2, borderColor: 'silver', padding: 15, width: '100%' }} >
        <P   ><P >اسامی سفارش: </P >{p.item.titles}</P>
      </Column>

      <Column style={[containerColumn,{borderBottomWidth:0, paddingTop:18, paddingBottom:5}]} >
        <P  ><P style={{ fontWeight: 'bold' }} >قیمت: </P>{spacePrice(p.item.price)} تومان</P>
        <P style={{ color: '#ababab', }}>{moment(p.item.date).format('jYYYY/jM/jD hh:mm')}</P>
        {/* <Text style={{ color: '#ababab', }}>{new Date().toString().split(" ")[4]}</Text> */}
      </Column>
    </>
  )
}

