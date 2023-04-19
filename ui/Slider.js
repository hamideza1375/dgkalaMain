import React from 'react'
import { Div, Slider } from '../Components/Html'

const _Slider = (p) => {
  return (
    <Slider {...p} onClick={() => { alert(8) }}
      img1={require('../assets/images/a1.jpg')}
      img2={require('../assets/images/a2.jpg')}
      img3={require('../assets/images/a3.jpg')}
      img4={require('../assets/images/a7.jpg')}
      img5={require('../assets/images/a1.jpg')}
      img6={require('../assets/images/a2.jpg')}
      img7={require('../assets/images/a3.jpg')}
      img8={require('../assets/images/a7.jpg')}
    />
  )
}

export default _Slider
