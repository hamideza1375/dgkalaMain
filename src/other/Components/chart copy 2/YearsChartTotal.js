import moment from 'moment-jalaali'
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, P, Span, } from '../Html'
var
  pushMond = [],
  pushMond2 = []

const YearsChartTotal = (p) => {

  const { color = '#a5fa', borderColor = '#52f8', rodColor = '#d8f5', rodWidth = 'auto', bgcolor = '#d8f5', br = 4, w = '100%', h = '100%', data } = p


  const pushArrayRef = useRef([])
  const pushArrayRef2 = useRef([])
  const pushArrayRef3 = useRef([])
  const pushArrayRef4 = useRef([])
  const pushArrayRef5 = useRef([])
  const pushArrayRef6 = useRef([])
  const pushArrayRef7 = useRef([])
  const pushArrayRef8 = useRef([])
  const pushArrayRef9 = useRef([])
  const pushArrayRef10 = useRef([])
  const pushArrayRef11 = useRef([])
  const pushArrayRef12 = useRef([])

  let pushArray = pushArrayRef.current
  let pushArray2 = pushArrayRef2.current
  let pushArray3 = pushArrayRef3.current
  let pushArray4 = pushArrayRef4.current
  let pushArray5 = pushArrayRef5.current
  let pushArray6 = pushArrayRef6.current
  let pushArray7 = pushArrayRef7.current
  let pushArray8 = pushArrayRef8.current
  let pushArray9 = pushArrayRef9.current
  let pushArray10 = pushArrayRef10.current
  let pushArray11 = pushArrayRef11.current
  let pushArray12 = pushArrayRef12.current

  const [totalNumbers, settotalNumbers] = useState([])

  const [totalNumbers2, settotalNumbers2] = useState([])

  const [totalNumbers3, settotalNumbers3] = useState([])

  const [totalNumbers4, settotalNumbers4] = useState([])

  const [totalNumbers5, settotalNumbers5] = useState([])

  const [totalNumbers6, settotalNumbers6] = useState([])

  const [totalNumbers7, settotalNumbers7] = useState([])

  const [totalNumbers8, settotalNumbers8] = useState([])

  const [totalNumbers9, settotalNumbers9] = useState([])

  const [totalNumbers10, settotalNumbers10] = useState([])

  const [totalNumbers11, settotalNumbers11] = useState([])

  const [totalNumbers12, settotalNumbers12] = useState([])

  const [sorteX, setsorteX] = useState([])


  useEffect(() => {
    pushArray = []
    pushArray2 = []
    pushArray3 = []
    pushArray4 = []
    pushArray5 = []
    pushArray6 = []
    pushArray7 = []
    pushArray8 = []
    pushArray9 = []
    pushArray10 = []
    pushArray11 = []
    pushArray12 = []
    pushMond = []
    pushMond2 = []

    if (data?.length)
      for (let i of data) {
        pushMond.push({ years: moment(i.date).format('jYYYY'), mond: moment(i.date).format('jM'), array: [] })
      }



    if (pushMond.length)
      for (let i of pushMond) {
        const find = pushMond2.find(f => f.years == i.years && f.mond == i.mond)
        if (!find) {
          pushMond2.push(i);
        }
      }



    if (data?.length)
      for (let i of data) {
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 1]?.mond) pushMond2[pushMond2.length - 1]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 2]?.mond) pushMond2[pushMond2.length - 2]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 3]?.mond) pushMond2[pushMond2.length - 3]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 4]?.mond) pushMond2[pushMond2.length - 4]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 5]?.mond) pushMond2[pushMond2.length - 5]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 6]?.mond) pushMond2[pushMond2.length - 6]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 7]?.mond) pushMond2[pushMond2.length - 7]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 8]?.mond) pushMond2[pushMond2.length - 8]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 9]?.mond) pushMond2[pushMond2.length - 9]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 10]?.mond) pushMond2[pushMond2.length - 10]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 11]?.mond) pushMond2[pushMond2.length - 11]?.array.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 12]?.mond) pushMond2[pushMond2.length - 12]?.array.push(i.pricePayment)

        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 1]?.mond) pushArray.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 2]?.mond) pushArray2.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 3]?.mond) pushArray3.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 4]?.mond) pushArray4.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 5]?.mond) pushArray5.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 6]?.mond) pushArray6.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 7]?.mond) pushArray7.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 8]?.mond) pushArray8.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 9]?.mond) pushArray9.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 10]?.mond) pushArray10.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 11]?.mond) pushArray11.push(i.pricePayment)
        if (moment(i.date).format('jM') == pushMond2[pushMond2.length - 12]?.mond) pushArray12.push(i.pricePayment)
      }


    pushArray.length && settotalNumbers(pushArray.reduce((total, number) => total + number))
    pushArray2.length && settotalNumbers2(pushArray2.reduce((total, number) => total + number))
    pushArray3.length && settotalNumbers3(pushArray3.reduce((total, number) => total + number))
    pushArray4.length && settotalNumbers4(pushArray4.reduce((total, number) => total + number))
    pushArray5.length && settotalNumbers5(pushArray5.reduce((total, number) => total + number))
    pushArray6.length && settotalNumbers6(pushArray6.reduce((total, number) => total + number))
    pushArray7.length && settotalNumbers7(pushArray7.reduce((total, number) => total + number))
    pushArray8.length && settotalNumbers8(pushArray8.reduce((total, number) => total + number))
    pushArray9.length && settotalNumbers9(pushArray9.reduce((total, number) => total + number))
    pushArray10.length && settotalNumbers10(pushArray10.reduce((total, number) => total + number))
    pushArray11.length && settotalNumbers11(pushArray11.reduce((total, number) => total + number))
    pushArray12.length && settotalNumbers12(pushArray12.reduce((total, number) => total + number))
    let sortpushArray = [totalNumbers, totalNumbers2, totalNumbers3, totalNumbers4, totalNumbers5, totalNumbers6, totalNumbers7, totalNumbers8, totalNumbers9, totalNumbers10, totalNumbers11, totalNumbers12].sort((a, b) => a - b)
    setsorteX(sortpushArray)


  }, [totalNumbers])


  return (
    <>

      <Span w={w} h={h} bgcolor={bgcolor} br={br} jc='center' ai='center' fd='row-reverse' >

        <Span h='90%' w={5} jc='center' fd='column-reverse' z={100}>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{(sorteX[sorteX.length - 12] / 1).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{((((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 12]) / 2) + (sorteX[sorteX.length - 12])) / 2).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 12]) / 2).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{((((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 12]) / 2) + (sorteX[sorteX.length - 1])) / 2).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{(sorteX[sorteX.length - 1] / 1).toFixed()}</P>
          </Span>
        </Span>


        <Span w={'90%'} h={'90%'} as='center' jc='center' ai='center' >
          {/* //! */}
          <Span w='100%' h='100%' border={[0, borderColor]} bbw={1} blw={1} fd='row-reverse' jc='center' ai='flex-end'>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers12 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers12}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers11 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers11}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers10 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers10}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers9 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers9}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers8 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers8}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers7 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers7}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers6 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers6}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers5 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers5}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers4 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers4}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers3 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers3}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers2 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers2}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown {...p} value={<P fs={11} ta='center' >{totalNumbers}</P>} />
            </Span>
            </Span>
          </Span>
          {/* //! */}
          <Span w='100%' h={5} fd='row-reverse' jc='center' >
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 12]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 12]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 11]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 11]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 10]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 10]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 9]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 9]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 8]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 8]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 7]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 7]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 6]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 6]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 5]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 5]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 4]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 4]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 3]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 3]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 2]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 2]?.mond}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 1]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 1]?.mond}</P>
            </Span>
          </Span>

        </Span>
      </Span>

    </>
  )
}

export default YearsChartTotal