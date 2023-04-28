import React from 'react'
import { Badge, Button, Card2, Column, Div, Icon, P, Pfa, Press, Row, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'
import _useEffect from '../../../../controllers/_initial';
import convertColor from '../../../../other/utils/convertColor'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Description = (p) => {

  p._client.setColor()
  p._client.getSingleSeller()


  let price = 0
  if (p.singleItem.offerTime?.exp > new Date().getTime())
    price = parseInt(p.singleItem.price - ((p.singleItem.price / 100) * p.singleItem.offerValue))
  else price = p.singleItem.price


  const setAsyncStorage = async (productBasket) => {
    await AsyncStorage.setItem('productBasket', JSON.stringify(productBasket))
  }


  _useEffect(() => {
    p.productBasket[p.route.params.id]?.color &&
       p.setcolor(color => {
        const c = { ...color }
        c[p.route.params.id] = p.productBasket[p.route.params.id]?.color
        return c
      })
  }, [p.productBasket[p.route.params.id]])


  const addToBasked = () => {
    ((p.singleItem.availableCount > 0) && (p.singleItem.available) && (p.availableSeller)) ?
      p.setproductBasket(addNumber => {
        const obj = { ...addNumber }
        obj[p.route.params.id] = { ...p.singleItem, price: price, color: p.color[p.route.params.id], number: 1 }
        setAsyncStorage(obj)
        return obj
      })
      :
      p.toast.warning('خطا', 'محصول مورد نظر موجود نمیباشد')
  }

  const plus = () => {
    (p.singleItem.availableCount && p.productBasket[p.route.params.id].number < p.singleItem.availableCount) &&
      p.setproductBasket(addNumber => {
        const obj = { ...addNumber }
        obj[p.route.params.id].number = obj[p.route.params.id].number + 1
        setAsyncStorage(obj)
        return obj
      })
  }

  const minus = () => {
    p.productBasket[p.route.params.id]?.number &&
      p.setproductBasket(addNumber => {
        const obj = { ...addNumber }
        obj[p.route.params.id].number = obj[p.route.params.id].number - 1
        if (obj[p.route.params.id].number === 0) delete obj[p.route.params.id]
        setAsyncStorage(obj)
        return obj
      })
  }


  const setColor = (item) => {
    p.setcolor((color) => {
      const c = { ...color }
      c[p.route.params.id] = item.color
      p.productBasket[p.route.params.id] && p.setproductBasket(addNumber => {
        const obj = { ...addNumber }
        obj[p.route.params.id].color = item.color
        setAsyncStorage(obj)
        return obj
      })
      return c
    })
  }


  return (
    <Span minw={290} w={'100%'} ai='center' jc='center'>
      {p.singleItem?.price ? 
      <Card2 h={400} w={'100%'} style={{ borderColor: 'silver', backgroundColor: 'white' }}
        coulumn1={
          <Span w={'100%'} f={1} >

            <Span fd='row' f={1} w={'100%'} ai='center' >
              <Span bbw={2} w='20%' fg={1} mh={7} t={7} />
              <P mt={14}>ارسال سریع</P>
              <Span bbw={2} w='20%' fg={1} mh={7} t={7} />
            </Span>

            <Span f={2} ph={12} jc='space-between' fd='row' ai='center'>
              <P fs={12} >قیمت: </P>

              {p.singleItem.offerTime?.exp > new Date().getTime() ?
                <Row >
                  <Pfa color='#0be' fs={16} mt={-1}>{spacePrice(parseInt(p.singleItem.price - ((p.singleItem.price / 100) * p.singleItem.offerValue)))} تومان </Pfa>
                  <Pfa color='#e33' fs={14} mt={-1} style={{ textDecorationLine: 'line-through' }} >{spacePrice(p.singleItem.price)} ت </Pfa>
                </Row>
                :
                <Pfa color='#0be' fs={16} mt={-1}>{spacePrice(p.singleItem.price)} تومان </Pfa>}
            </Span >

          </Span>
        }
        c2={3} coulumn2={
          <Span w={'100%'} f={1}>

            <Span h={50} fg={1} fd='row' pr={12} ai='center'>
              <P mb={-6}>گارانتی: </P>
              <P fs={11} mb={-6}>{p.singleItem.warranty} ماه شرکتی</P>
            </Span >

            <Span h={50} fg={1} fd='row' pr={12} ai='center' >
              <P mb={-6}>موجود در انبار: </P>
              {((p.singleItem.available) && (p.availableSeller) && (p.singleItem.availableCount > 0)) ?
                <P fs={10} color={p.singleItem.availableCount < 10 ? '#f44c' : '#0ce'} mb={-6}>{p.singleItem.availableCount < 10 ? `تنها ${p.singleItem.availableCount} عدد در انبار موجود هست` : 'موجود هست'}</P>
                :
                <P fs={10} color={'#f44c'} mb={-6}>ناموجود</P>
              }
            </Span >

            <Span h={110} fg={1} pr={12}>
              <Span t={20} >
                <P >انتخاب رنگ: </P>
              </Span>
              <Span mt={20} fg={1} fd='row' pr={12} ai='center'>

                {p.singleItem.color?.map((item, index) => (
                  item.value > 0 && <Span key={index} br={4} border={[1, '#ddd']} w={57} h={57} ai='center' mh={3} >
                    <Press onClick={() => { setColor(item) }} ai='center' h={30} mt={6}>
                      <Badge bgcolor={p.color[p.route.params.id] !== item.color ? '#fff' : (item.color === 'white' ? '#f5f5f5' : item.color)} border={item.color === 'white' ? [2, '#f5f5f5'] : [2, item.color]} w={30} h={30} /></Press>
                    <Span><P fs={10} >{convertColor(item.color)}</P></Span>
                  </Span>
                ))}

              </Span >

            </Span >

            <Row h={70} fg={1} mb={10} jc='space-around' ai='center'>

              <Column w='70%' h={'100%'} jc='center' >
                <Button disable={p.productBasket[p.route.params.id]?.number}  onClick={() => { addToBasked() }} w='100%' bgcolor='#909' style={{ alignSelf: 'center' }} >افزودن به سبد خرید</Button>
              </Column>

              {p.productBasket[p.route.params.id]?.number ?
               <Column h={'100%'} jc='center' >
                <Column style={{ height: 20, width: 20 }} >
                  <Icon name='plus' color='#0ad' size={20} onClick={() => { plus() }} />
                </Column>

                <Column style={{ height: 20, width: 20 }} >
                  <P mt={3} ta='center' >{p.productBasket[p.route.params.id]?.number}</P>
                </Column>


                <Column style={{ height: 20, width: 20 }} >
                  <Icon name='minus' color='#e11' size={20} onClick={() => { minus() }} />
                </Column>
              </Column>
                :
                <></>
              }

            </Row >

          </Span>}
      />
        :
        <></>
      }
    </Span>
  )
}

export default Description