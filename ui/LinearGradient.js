import React from 'react'
import { Text } from 'react-native';
import { Span } from '../Components/Html';
import LinearGradient from '../Components/other/LinearGradient';


export default function _LinearGradient() {
  return (
    <Span w={150} h={150} as='center' mt={50}>

      <LinearGradient nativeStart={{ x: 1.5, y:1.5 }} webStart={{ x: 7 }}  colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >

      </LinearGradient>

      <Span style={{ borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 111111, backgroundColor: 'white', position: 'absolute' }} >

      </Span>
    </Span>


  )
}




// <Span>
// <Span fd='row' ai='center' >
//   <P mr={15} mt={12} fs={15} mb={-15} color='#444' >دسته ها</P>
//   <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginTop: 28, marginHorizontal: 25 }} ></LinearGradient>
// </Span>

// <ScrollSlider
//   {...p}
//   h={180} ccStyle={{ height: 180 }}
//   style={Platform.OS !== 'web' ? { paddingRight: 290 } : { paddingRight: 10 }}
//   data={p.array}
//   renderItem={({ item }) => (
//     <Span w={120} h={130} as='center' >
//       <Span w={110} h={110} as='center'>
//         <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 107, height: 104, maxHeight: 105 }} >
//           <Span w={100} h={98} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, right: 3.5, top: 3, backgroundColor: 'white', position: 'absolute' }} >
//             <Img w={97} h={97} br={80} src={require('../../assets/images/a1.jpg')} />
//           </Span>
//         </LinearGradient>
//       </Span>
//       <P as='center' mt='auto' fs={15} fw='bold' color='#229b' >3قطعات موبایل</P>
//     </Span>
//   )}
// />
// </Span>