import moment from 'moment-jalaali'
import React, { useEffect, useRef, useState } from 'react'
import spacePrice from '../../utils/spacePrice'
import { Dropdown, P, Span, } from '../Html'
var
  pushMond = [],
  pushMond2 = []

const YearsChartMean = ({ color = '#a5fd', borderColor = '#a5f7', rodColor = '#d5fd', rodWidth = 'auto', bgcolor = '#d5fa', br = 4, w = '100%', h = '100%', data }) => {


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

  const [totalNumbers, settotalNumbers] = useState(.1)

  const [totalNumbers2, settotalNumbers2] = useState(.1)

  const [totalNumbers3, settotalNumbers3] = useState(.1)

  const [totalNumbers4, settotalNumbers4] = useState(.1)

  const [totalNumbers5, settotalNumbers5] = useState(.1)

  const [totalNumbers6, settotalNumbers6] = useState(.1)

  const [totalNumbers7, settotalNumbers7] = useState(.1)

  const [totalNumbers8, settotalNumbers8] = useState(.1)

  const [totalNumbers9, settotalNumbers9] = useState(.1)

  const [totalNumbers10, settotalNumbers10] = useState(.1)

  const [totalNumbers11, settotalNumbers11] = useState(.1)

  const [totalNumbers12, settotalNumbers12] = useState(.1)

  const [sorteX, setsorteX] = useState([1])

  const [change, setchange] = useState(false)


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
        pushMond.push({ date: new Date(i.date), years: moment(new Date(i.date)).format('jYYYY'), mond: moment(new Date(i.date)).format('jM'), array: [] })
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
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 1]?.mond && pushMond2[pushMond2.length - 1]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 1]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 2]?.mond && pushMond2[pushMond2.length - 2]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 2]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 3]?.mond && pushMond2[pushMond2.length - 3]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 3]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 4]?.mond && pushMond2[pushMond2.length - 4]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 4]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 5]?.mond && pushMond2[pushMond2.length - 5]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 5]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 6]?.mond && pushMond2[pushMond2.length - 6]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 6]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 7]?.mond && pushMond2[pushMond2.length - 7]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 7]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 8]?.mond && pushMond2[pushMond2.length - 8]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 8]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 9]?.mond && pushMond2[pushMond2.length - 9]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 9]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 10]?.mond && pushMond2[pushMond2.length - 10]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 10]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 11]?.mond && pushMond2[pushMond2.length - 11]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 11]?.array.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 12]?.mond && pushMond2[pushMond2.length - 12]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushMond2[pushMond2.length - 12]?.array.push(i.price)

        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 1]?.mond && pushMond2[pushMond2.length - 1]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 2]?.mond && pushMond2[pushMond2.length - 2]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray2.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 3]?.mond && pushMond2[pushMond2.length - 3]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray3.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 4]?.mond && pushMond2[pushMond2.length - 4]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray4.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 5]?.mond && pushMond2[pushMond2.length - 5]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray5.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 6]?.mond && pushMond2[pushMond2.length - 6]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray6.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 7]?.mond && pushMond2[pushMond2.length - 7]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray7.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 8]?.mond && pushMond2[pushMond2.length - 8]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray8.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 9]?.mond && pushMond2[pushMond2.length - 9]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray9.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 10]?.mond && pushMond2[pushMond2.length - 10]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray10.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 11]?.mond && pushMond2[pushMond2.length - 11]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray11.push(i.price)
        if (moment(new Date(i.date)).format('jM') == pushMond2[pushMond2.length - 12]?.mond && pushMond2[pushMond2.length - 12]?.date.getFullYear().toString() == new Date(i.date).getFullYear().toString()) pushArray12.push(i.price)
      }



    pushArray.length && settotalNumbers(pushArray.reduce((total, number) => total + number) / pushArray.length)
    pushArray2.length && settotalNumbers2(pushArray2.reduce((total, number) => total + number) / pushArray2.length)
    pushArray3.length && settotalNumbers3(pushArray3.reduce((total, number) => total + number) / pushArray3.length)
    pushArray4.length && settotalNumbers4(pushArray4.reduce((total, number) => total + number) / pushArray4.length)
    pushArray5.length && settotalNumbers5(pushArray5.reduce((total, number) => total + number) / pushArray5.length)
    pushArray6.length && settotalNumbers6(pushArray6.reduce((total, number) => total + number) / pushArray6.length)
    pushArray7.length && settotalNumbers7(pushArray7.reduce((total, number) => total + number) / pushArray7.length)
    pushArray8.length && settotalNumbers8(pushArray8.reduce((total, number) => total + number) / pushArray8.length)
    pushArray9.length && settotalNumbers9(pushArray9.reduce((total, number) => total + number) / pushArray9.length)
    pushArray10.length && settotalNumbers10(pushArray10.reduce((total, number) => total + number) / pushArray10.length)
    pushArray11.length && settotalNumbers11(pushArray11.reduce((total, number) => total + number) / pushArray11.length)
    pushArray12.length && settotalNumbers12(pushArray12.reduce((total, number) => total + number) / pushArray12.length)

    let sortpushArray = [totalNumbers, totalNumbers2, totalNumbers3, totalNumbers4, totalNumbers5, totalNumbers6, totalNumbers7, totalNumbers8, totalNumbers9, totalNumbers10, totalNumbers11, totalNumbers12].sort((a, b) => a - b)
    setsorteX(sortpushArray)


  }, [data])


  useEffect(() => {
    setTimeout(() => {
      setchange(true)
    }, 1000);
  }, [])


  return (
    <>

      <Span w={w} h={h} bgcolor={bgcolor} br={br} jc='center' ai='center' fd='row-reverse' >

        <Span h='90%' w={5} jc='center' fd='column-reverse' z={100}>
          <Span ml={-5} f={1} h={5} ai='flex-end' jc='center' >
            <P ta='left' w={75} fs={7.5} color={color} >{(sorteX[sorteX.length - 12] / 1).toFixed()}</P>
          </Span>
          <Span ml={-5} f={1} h={5} ai='flex-end'>
            <P ta='left' w={75} fs={7.5} color={color} >{((((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 12]) / 2) + (sorteX[sorteX.length - 12])) / 2).toFixed()}</P>
          </Span>
          <Span ml={-5} f={1} h={5} ai='flex-end'>
            <P ta='left' w={75} fs={7.5} color={color} >{((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 12]) / 2).toFixed()}</P>
          </Span>
          <Span ml={-5} f={1} h={5} ai='flex-end'>
            <P ta='left' w={75} fs={7.5} color={color} >{((((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 12]) / 2) + (sorteX[sorteX.length - 1])) / 2).toFixed()}</P>
          </Span>
          <Span ml={-5} f={1} h={5} ai='flex-end'>
            <P ta='left' w={75} fs={7.5} color={color} >{(sorteX[sorteX.length - 1] / 1).toFixed()}</P>
          </Span>
        </Span>

        <Span w={'90%'} h={'90%'} as='center' jc='center' ai='center' >
          {/* //! */}
          <Span w='100%' h='100%' border={[0, borderColor]} bbw={1} blw={1} fd='row-reverse' jc='center' ai='flex-end'>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers12 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers12).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers11 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers11).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers10 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers10).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers9 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers9).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers8 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers8).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers7 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers7).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers6 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers6).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers5 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers5).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers4 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers4).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers3 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers3).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers2 / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers2).toFixed())}</P>} />
            </Span>
            </Span>
            <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} minh={1} f={(totalNumbers / sorteX[sorteX.length - 1])} maxh='100%' bgcolor={rodColor} >
              <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers).toFixed())}</P>} />
            </Span>
            </Span>
          </Span>
          {/* //! */}
          <Span w='100%' h={10} fd='row-reverse' jc='center' >
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 12]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 12]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 11]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 11]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 10]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 10]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 9]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 9]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 8]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 8]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 7]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 7]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 6]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 6]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 5]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 5]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 4]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 4]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 3]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 3]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 2]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 2]?.mond}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 1]?.years.split('0')[1]}/{pushMond2[pushMond2.length - 1]?.mond}</P>
            </Span>
          </Span>

        </Span>
      </Span>

    </>
  )
}

export default YearsChartMean