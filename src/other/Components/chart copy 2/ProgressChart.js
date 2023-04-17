import moment from 'moment-jalaali'
import React, { useRef } from 'react'
import _useEffect from '../../../controllers/_initController'
import { Dropdown, P, Span, } from '../Html'

var
  pushMond = [],
  pushMond2 = []

const ProgressChart = (p) => {

  const { color = '#222', rodWidth = 30, bgcolor = '#fff', br = 2, w = '100%', h = '100%', data } = p

  const _checkSend = useRef([])
  const _queueSend = useRef([])
  const _send = useRef([])

  let checkSend = _checkSend.current
  let queueSend = _queueSend.current
  let send = _send.current

  const pushArrayRef = useRef([])
  const pushArrayRef7 = useRef([])

  let pushArray = pushArrayRef.current
  let pushArray7 = pushArrayRef7.current


  _useEffect(() => {
    pushArray = []
    pushArray7 = []
    pushMond = []
    pushMond2 = []

    if (data?.length)
      for (let i of data) {
        pushMond.push({ monds: moment(i.date).format('jM'), days: moment(i.date).format('jD'), array: [] })
      }


    if (pushMond.length)
      for (let i of pushMond) {
        const find = pushMond2.find(f => f.monds == i.monds && f.days == i.days)
        if (!find) {
          pushMond2.push(i);
        }
      }


    if (data?.length)
      for (let i of data) {

        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 1]?.days) pushArray.push(i.pricePayment)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 7]?.days) pushArray7.push(i.pricePayment)

        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 1]?.days && (i.checkSend === 1)) checkSend.push(i.checkSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 2]?.days && (i.checkSend === 1)) checkSend.push(i.checkSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 3]?.days && (i.checkSend === 1)) checkSend.push(i.checkSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 4]?.days && (i.checkSend === 1)) checkSend.push(i.checkSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 5]?.days && (i.checkSend === 1)) checkSend.push(i.checkSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 6]?.days && (i.checkSend === 1)) checkSend.push(i.checkSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 7]?.days && (i.checkSend === 1)) checkSend.push(i.checkSend)

        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 1]?.days && (i.queueSend === 1)) queueSend.push(i.queueSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 2]?.days && (i.queueSend === 1)) queueSend.push(i.queueSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 3]?.days && (i.queueSend === 1)) queueSend.push(i.queueSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 4]?.days && (i.queueSend === 1)) queueSend.push(i.queueSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 5]?.days && (i.queueSend === 1)) queueSend.push(i.queueSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 6]?.days && (i.queueSend === 1)) queueSend.push(i.queueSend)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 7]?.days && (i.queueSend === 1)) queueSend.push(i.queueSend)

        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 1]?.days && (i.send === 1)) send.push(i.send)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 2]?.days && (i.send === 1)) send.push(i.send)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 3]?.days && (i.send === 1)) send.push(i.send)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 4]?.days && (i.send === 1)) send.push(i.send)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 5]?.days && (i.send === 1)) send.push(i.send)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 6]?.days && (i.send === 1)) send.push(i.send)
        if (moment(i.date).format('jD') == pushMond2[pushMond2.length - 7]?.days && (i.send === 1)) send.push(i.send)

      }
  }, [])


  return (
    <>
      <Span w={w} h={h} ai='center' bgcolor={bgcolor} jc='space-between' pt={20} pb={10} br={br}>
        <Span fd='row' jc='center'>
          <Span mh={5} fd='row' ai='center' jc='center' >
            <Span w={15} h={4} bgcolor='#0b3' />
            <P mr={2} fs={8} color={color}>ارسال شده</P>
          </Span>
          <Span mh={5} fd='row' ai='center' jc='center' >
            <Span w={15} h={4} bgcolor='#ee0' />
            <P mr={2} fs={8} color={color}>در صف ارسال</P>
          </Span>
          <Span mh={5} fd='row' ai='center' jc='center' >
            <Span w={15} h={4} bgcolor='#f33' />
            <P mr={2} fs={8} color={color}>در صف برسی</P>
          </Span>
        </Span>
        <Span w={'90%'} h={rodWidth} as={'center'} mt={10} fd='row' border={[1, 'silver']}>
          <Span h={'100%'} f={send.length} bgcolor='#0b3'>
            <Dropdown {...p} value={<P fs={11} ta='center' >نفر {send.length}</P>} />
          </Span>
          <Span h={'100%'} f={queueSend.length} bgcolor='#ee0'>
            <Dropdown {...p} value={<P fs={11} ta='center' >نفر {queueSend.length}</P>} />
          </Span>
          <Span h={'100%'} f={checkSend.length} bgcolor='#f33'>
            <Dropdown {...p} value={<P fs={11} ta='center' >نفر {checkSend.length}</P>} />
          </Span>
        </Span>
        <Span h={20} w='90%' fd='row' jc='space-between'>
          <P fs={9} >{pushMond2[pushMond2.length - 1]?.monds}/{pushMond2[pushMond2.length - 1]?.days}</P>
          <P fs={9} >{pushMond2[pushMond2.length - 7]?.monds}/{pushMond2[pushMond2.length - 7]?.days}</P>
        </Span>
      </Span>
    </>
  )
}

export default ProgressChart

