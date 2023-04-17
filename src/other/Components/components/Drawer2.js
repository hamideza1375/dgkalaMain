import React, { useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'
import { context } from '../../../context/_context'
import { Column } from '../../Components/Html'

const Drawer2 = ({ children, show, setshow }) => {
  const { width } = context()

  const [start, setstart] = useState(false)

  const fadeAnim = useRef(new Animated.Value(-300)).current;

  const open = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false
    }).start();
    setshow(true)
  };

  const close = () => {
    Animated.timing(fadeAnim, {
      toValue: -300,
      duration: 200,
      useNativeDriver: false
    }).start();
    setshow(false)
  };


  useEffect(() => {
    ((start) || (width > 1024)) &&
    show ? open() : close()
    setstart(true)
  }, [show])

  


  return (
    <>

      {((show) && (start) && ((width <= 1024))) ? <Column onClick={close} w='100%' h='100%' bgcolor='#8888' pos='absolute' z={100} /> : <></>}

      {((show) || ((width <= 1024))) ?
        <Animated.View style={[{ zIndex: 200, minWidth: 220, maxWidth: 220, height: 555, backgroundColor: '#fff', height: '100%', right: fadeAnim, position: width > 1024 ? 'relative' : 'absolute' }]}>
          {children}
        </Animated.View>
        :
        <></>
      }
    </>
  )
}

export default Drawer2


