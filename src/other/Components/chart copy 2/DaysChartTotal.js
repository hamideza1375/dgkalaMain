import moment from 'moment-jalaali'
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, P, Span, } from '../Html'
var
  pushMond = [],
  pushMond2 = []

const DaysChartTotal = (p) => {

  const { color = '#a50a', borderColor = '#5208', rodColor = '#d805', rodWidth = 'auto', bgcolor = '#d805', br = 4, w = '100%', h = '100%', data } = p


  const pushArrayRef = useRef([])
  const pushArrayRef2 = useRef([])
  const pushArrayRef3 = useRef([])
  const pushArrayRef4 = useRef([])
  const pushArrayRef5 = useRef([])
  const pushArrayRef6 = useRef([])
  const pushArrayRef7 = useRef([])

  let pushArray = pushArrayRef.current
  let pushArray2 = pushArrayRef2.current
  let pushArray3 = pushArrayRef3.current
  let pushArray4 = pushArrayRef4.current
  let pushArray5 = pushArrayRef5.current
  let pushArray6 = pushArrayRef6.current
  let pushArray7 = pushArrayRef7.current

  const [totalNumbers, settotalNumbers] = useState([])

  const [totalNumbers2, settotalNumbers2] = useState([])

  const [totalNumbers3, settotalNumbers3] = useState([])

  const [totalNumbers4, settotalNumbers4] = useState([])

  const [totalNumbers5, settotalNumbers5] = useState([])

  const [totalNumbers6, settotalNumbers6] = useState([])

  const [totalNumbers7, settotalNumbers7] = useState([])

  const [sorteX, setsorteX] = useState([])


  useEffect(() => {
    pushArray = []
    pushArray2 = []
    pushArray3 = []
    pushArray4 = []
    pushArray5 = []
    pushArray6 = []
    pushArray7 = []
    pushMond = []
    pushMond2 = []

    if (data?.length)
      for (let i of data) {
        // for (let n of data) {
        // if(i.date.getDay() !== n.date.getDay() && i.date.getMonth() == n.date.getMonth())
        pushMond.push({ monds: moment(i.date).format('jM'), days: moment(i.date).format('jD'), array: [] })
      }
    // }

    pushMond.reverse()
    if (pushMond.length)
      for (let i of pushMond) {
        for (let n of pushMond) {
          if (i.days !== n.days) {
            const find = pushMond2.find(f => f.monds == i.monds && f.days == i.days)
            if (!find) {
              pushMond2.push(i);
            }
          }
        }
      }
    pushMond2.reverse()

    if (data?.length)
      for (let i of data) {
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 1]?.days) pushMond2[pushMond2.length - 1]?.array.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 2]?.days) pushMond2[pushMond2.length - 2]?.array.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 3]?.days) pushMond2[pushMond2.length - 3]?.array.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 4]?.days) pushMond2[pushMond2.length - 4]?.array.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 5]?.days) pushMond2[pushMond2.length - 5]?.array.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 6]?.days) pushMond2[pushMond2.length - 6]?.array.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 7]?.days) pushMond2[pushMond2.length - 7]?.array.push(i.pricePayment)

        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 1]?.days) pushArray.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 2]?.days) pushArray2.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 3]?.days) pushArray3.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 4]?.days) pushArray4.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 5]?.days) pushArray5.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 6]?.days) pushArray6.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 7]?.days) pushArray7.push(i.pricePayment)
      }


    pushArray.length && settotalNumbers(pushArray.reduce((total, number) => total + number))
    pushArray2.length && settotalNumbers2(pushArray2.reduce((total, number) => total + number))
    pushArray3.length && settotalNumbers3(pushArray3.reduce((total, number) => total + number))
    pushArray4.length && settotalNumbers4(pushArray4.reduce((total, number) => total + number))
    pushArray5.length && settotalNumbers5(pushArray5.reduce((total, number) => total + number))
    pushArray6.length && settotalNumbers6(pushArray6.reduce((total, number) => total + number))
    pushArray7.length && settotalNumbers7(pushArray7.reduce((total, number) => total + number))

    let sortpushArray = [totalNumbers, totalNumbers2, totalNumbers3, totalNumbers4, totalNumbers5, totalNumbers6, totalNumbers7].sort((a, b) => a - b)
    setsorteX(sortpushArray)

  }, [totalNumbers])


  return (
    <>

      <Span w={w} h={h} bgcolor={bgcolor} br={br} jc='center' ai='center' fd='row-reverse' >

        <Span h='90%' w={5} jc='center' fd='column-reverse' z={100}>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{(sorteX[sorteX.length - 7] / 1).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{((((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 7]) / 2) + (sorteX[sorteX.length - 7])) / 2).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 7]) / 2).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{((((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 7]) / 2) + (sorteX[sorteX.length - 1])) / 2).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={7.5} color={color} >{(sorteX[sorteX.length - 1] / 1).toFixed()}</P>
          </Span>
        </Span>


        <Span w={'90%'} h={'90%'} as='center' jc='center' ai='center' >
          {/* //! */}
          <Span w='100%' h='100%' border={[0, borderColor]} bbw={1} blw={1} fd='row-reverse' jc='center' ai='flex-end'>
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
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 7]?.monds}/{pushMond2[pushMond2.length - 7]?.days}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 6]?.monds}/{pushMond2[pushMond2.length - 6]?.days}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 5]?.monds}/{pushMond2[pushMond2.length - 5]?.days}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 4]?.monds}/{pushMond2[pushMond2.length - 4]?.days}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 3]?.monds}/{pushMond2[pushMond2.length - 3]?.days}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 2]?.monds}/{pushMond2[pushMond2.length - 2]?.days}</P>
            </Span>
            <Span f={1} h={5} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 1]?.monds}/{pushMond2[pushMond2.length - 1]?.days}</P>
            </Span>
          </Span>

        </Span>
      </Span>

    </>
  )
}

export default DaysChartTotal