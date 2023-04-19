import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Badge, Button } from '../Components/Html'



function _Badge() {

  return (

    <View style={{ position: 'relative', width: 94, alignSelf: 'center', top: 100 }} >
      <Badge
        // right={1}
        left={1}
        // top={10}
        scale={1.1}
        bgcolor='blue'
        color='silver'
        // style
        text={"2"}
      />
      <Button style={styles.btn} >click</Button>
    </View>

  )
}



export default _Badge;

const styles = StyleSheet.create({
  btn: {
    width: 80,
    alignSelf: 'center',
  },
})