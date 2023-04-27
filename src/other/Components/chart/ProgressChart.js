import moment from 'moment-jalaali'
import React, { useEffect, useRef, useState } from 'react'
import spacePrice from '../../utils/spacePrice'
import { Dropdown, P, Span, } from '../Html'

var
  pushMond = [],
  pushMond2 = []

const ProgressChart = ({ color = '#222', rodWidth = 30, bgcolor = '#fff', br = 2, w = '100%', h = '100%', data }) => {

  const [change, setchange] = useState(false)

  const checkSend = useRef([])
  const queueSend = useRef([])
  const send = useRef([])




  const pushArrayRef = useRef([])
  const pushArrayRef7 = useRef([])

  let pushArray = pushArrayRef.current
  let pushArray7 = pushArrayRef7.current


  useEffect(() => {
    pushArray = []
    pushArray7 = []
    pushMond = []
    pushMond2 = []

    checkSend.current = []
    queueSend.current = []
    send.current = []

    if (data?.length)
      for (let i of data) {
        pushMond.push({ date: new Date(i.date), monds: moment(new Date(i.date)).format('jM'), days: moment(new Date(i.date)).format('jD'), array: [] })
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

        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 1]?.days) pushArray.push(i.price)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 7]?.days) pushArray7.push(i.price)

        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 1]?.days && pushMond2[pushMond2.length - 1]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.checkSend === 1)) checkSend.current.push(i.checkSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 2]?.days && pushMond2[pushMond2.length - 2]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.checkSend === 1)) checkSend.current.push(i.checkSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 3]?.days && pushMond2[pushMond2.length - 3]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.checkSend === 1)) checkSend.current.push(i.checkSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 4]?.days && pushMond2[pushMond2.length - 4]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.checkSend === 1)) checkSend.current.push(i.checkSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 5]?.days && pushMond2[pushMond2.length - 5]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.checkSend === 1)) checkSend.current.push(i.checkSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 6]?.days && pushMond2[pushMond2.length - 6]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.checkSend === 1)) checkSend.current.push(i.checkSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 7]?.days && pushMond2[pushMond2.length - 7]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.checkSend === 1)) checkSend.current.push(i.checkSend)

        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 1]?.days && pushMond2[pushMond2.length - 1]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.queueSend === 1)) queueSend.current.push(i.queueSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 2]?.days && pushMond2[pushMond2.length - 2]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.queueSend === 1)) queueSend.current.push(i.queueSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 3]?.days && pushMond2[pushMond2.length - 3]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.queueSend === 1)) queueSend.current.push(i.queueSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 4]?.days && pushMond2[pushMond2.length - 4]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.queueSend === 1)) queueSend.current.push(i.queueSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 5]?.days && pushMond2[pushMond2.length - 5]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.queueSend === 1)) queueSend.current.push(i.queueSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 6]?.days && pushMond2[pushMond2.length - 6]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.queueSend === 1)) queueSend.current.push(i.queueSend)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 7]?.days && pushMond2[pushMond2.length - 7]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.queueSend === 1)) queueSend.current.push(i.queueSend)

        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 1]?.days && pushMond2[pushMond2.length - 1]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.send === 1)) send.current.push(i.send)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 2]?.days && pushMond2[pushMond2.length - 2]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.send === 1)) send.current.push(i.send)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 3]?.days && pushMond2[pushMond2.length - 3]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.send === 1)) send.current.push(i.send)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 4]?.days && pushMond2[pushMond2.length - 4]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.send === 1)) send.current.push(i.send)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 5]?.days && pushMond2[pushMond2.length - 5]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.send === 1)) send.current.push(i.send)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 6]?.days && pushMond2[pushMond2.length - 6]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.send === 1)) send.current.push(i.send)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 7]?.days && pushMond2[pushMond2.length - 7]?.date.getMonth().toString() == new Date(i.date).getMonth().toString() && (i.send === 1)) send.current.push(i.send)

      }
  }, [data])


  useEffect(() => {
    setTimeout(() => {
      setchange(true)
    }, 1000);
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
          <Span h={'100%'} f={send.current.length + 1} bgcolor='#0b3'>
            <Dropdown value={<P fs={9} ta='center' >{spacePrice((send.current.length).toFixed())} نفر</P>} />
          </Span>
          <Span h={'100%'} f={queueSend.current.length + 1} bgcolor='#ee0'>
            <Dropdown value={<P fs={9} ta='center' >{spacePrice((queueSend.current.length).toFixed())} نفر</P>} />
          </Span>
          <Span h={'100%'} f={checkSend.current.length + 1} bgcolor='#f33'>
            <Dropdown value={<P fs={9} ta='center' >{spacePrice((checkSend.current.length).toFixed())} نفر</P>} />
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

