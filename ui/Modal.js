import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Modal } from '../Components/Html'


function App() {

  const [show, setshow] = useState(false);


  return (
    <>
      <Button onPress={() => setshow(true)} >onclik</Button>

      <Modal setshow={setshow} show={show}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }} >salam salam</Text>
        <View>
          <Card bgcolor="blue" header={'salam salam'}
            style={{
              width: 300, justifyContent: 'center', alignItems: 'center',
              marginTop: 8
            }} />
        </View>
        <Button outline style={{ fontSize: 14, width: 111, marginTop: 10 }}>Send</Button>
      </Modal>

    </>
  )
}



export default App;