import React from 'react'
import { Text } from 'react-native'
import { Span } from '../Components/Html'
import MaskedView from '../Components/other/MaskedView'


const App = () => {
  return (
    <Span w={222}h={200}>
      <MaskedView  source={require("../assets/images/g1.jpg")} >
        <Text style={{fontSize:60,fontWeight:'bold'}}>dsrf</Text>
      </MaskedView>

      <MaskedView colors={['red','blue', 'green']} >
        <Text style={{fontSize:70}}>dsrf</Text>
      </MaskedView>
    </Span>
  )
}






export default App
