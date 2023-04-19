

import React from 'react'
import { P, Span } from '../src/Components/Html'
import Lineargradient from '../src/Components/other/LinearGradient'

const LineLineargradient = () => {
  return (
    <Span fd='row' ai='center' >
      <P mr={15} mt={12} fs={15} mb={-15} color='#444' >دسته ها</P>
      <Lineargradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginTop: 28, marginHorizontal: 25 }} ></Lineargradient>
    </Span>)
}

export default LineLineargradient