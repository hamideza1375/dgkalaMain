import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { A_icon, Card2, M_icon, P, Pfa, Row, Column } from '../../other/Components/Html'
import { localhost } from '../../other/utils/axios/axios'
import spacePrice from '../../other/utils/spacePrice'

const VerticalImageCard = ({ onClick, item = {title:'title', price:25000}, h = 240, w, style, sh = { r: 6, o: .4, of: { width: 0, height: 2 } } }) => {
  return (
    <Card2 sh={sh}
      onClick={onClick}
      bgcolor={'#fff'}
      style={[{ minWidth: 155, maxWidth: '98%', width: w, borderColor: 'silver', marginVertical: 15, height: h }, style]}
      src={/* item.imageUrl && */ require('../../other/assets/images/logo.png')}
      coulumn1={<Column mt={8} w={'100%'}><P fs={11} ta='center' as='center' >{item.title}</P></Column>}
      coulumn2={<Column bgcolor='#eee' fd='row' h={35} jc='center' w={'100%'}>
        <Column ai='center' w={'25%'} h={35} border={[0, 'silver']} pt={1} >
          <M_icon name='memory' size={16} />
          <P fs={8} mt={1} ta='center' >{item.cpuCore} هسته</P>
        </Column>
        <Column ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1}>
          <Icon name='hdd' size={16} color='#000' />
          <P fs={8} mt={1} ta='center' >{item.storage} گیگ </P>
        </Column>
        <Column ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
          <Icon name='memory' size={16} />
          <P fs={8} mt={1} ta='center' >{item.ram} گیگ</P>
        </Column>
        <Column ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
          <A_icon name='camera' size={15} />
          <P fs={8} mt={1} ta='center' >{item.camera} پیکسل</P>
        </Column>
      </Column>
      }
      coulumn3={<Column mt={8} fd='row' jc='space-evenly' w={'100%'}>

        <Column>
          <Pfa fs={15}>{spacePrice(item.price)} تومان</Pfa>
        </Column>

      </Column>}
    // c4={item.offerTime?.exp > new Date().getTime() ? 1 : .1}
    //  coulumn4={item.offerTime?.exp > new Date().getTime() ? <Column fd='row' jc='space-between' w={'100%'} bgcolor='red' h='100%' p={7}><P color='white' >{dt}</P><P color='white' >{item.offerValue}%</P></Column> : <></>}
    />)
}

export default VerticalImageCard