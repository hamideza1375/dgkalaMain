



import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import {  FlatList,List, Vlist } from '../Components/Html';

const array = [{ id: '1', title: 'node', price: '909',color:'red' }, { id: '2', title: 'react', price: '787', color:'green' },{ id: '2', title: 'react', price: '787', color:'pink' }];




const App = () => {
  return (
    <FlatList
    // onScrollToIndexFailed={}
    // initialScrollIndex={4}
    // columnWrapperStyle
    // numColumns={}
    // inverted
    // initialNumToRender={1}
    colomn1={2}
    colomn2={3}
    colomn3={4}
    colomn4={5}
      data={array}
      renderItem={({ item }) => (
        <View style={[{ flexDirection: 'row', alignSelf:'center', width:355, borderWidth:2 }, styles.item]}>
          <Text style={[{ marginHorizontal: 9 ,borderWidth:2}, styles.title]}>salam</Text>
          <Text style={[{ marginHorizontal: 9 ,borderWidth:2}, styles.title]}>{item.title}</Text>
          <Text style={[{ marginHorizontal: 9 }, styles.title]}>{item.price}</Text>
          <Text style={[{ marginHorizontal: 9 }, styles.title]}>{item.color}</Text>
        </View>
      )}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    width: '50%',
    alignSelf: 'center'
  },
  item: {
    backgroundColor: '#bbb',
    height: 150,
    margin:20
  },
  title: {
    fontSize: 22,
  },
});

export default App;


