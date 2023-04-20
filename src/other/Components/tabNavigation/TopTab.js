import React from 'react'
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Div, Py } from '../Html';

const TopTab = ({ group, children, name, style, bgcolor = '#fff', color = "#aaa", activeColor = "#7aeb" }) => {
  const navigation = useNavigation()
  const height = Dimensions.get('window').height


  return (
    <View style={[styles.container,{maxHeight:height}]} >
      <Div id="top-tab" style={[styles.sidebar, { backgroundColor: bgcolor }, style]} >
        {group.map((item, key) => (
          <View key={key} style={styles.routeView} >
            <Pressable
              onPress={() => navigation.navigate(item.name)}
              style={[styles.pressableActive,]} >
              <Py style={[styles.textActive,
              { color: name === item.name ? activeColor : color, paddingTop: name === item.name ? 2 : 5 }]}>{item.title}</Py>
              <View
                style={[styles.borderActive, { borderBottomColor: name === item.name ? "#5aea" : "#f5f5f5", borderBottomWidth: name === item.name ? 3 : 0 }]} ></View>
            </Pressable>
          </View>
        ))}
      </Div>
      <View style={{ height: '92%', flex:1 }} >
        {children}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    position: 'relative',
    height: '100%',
    flex: 1
  },
  sidebar: {
    minHeight: 48,
    height:48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2,
      borderRadius: 6,
    },
    zIndex: 100
  },
  routeView: {
    minHeight: 42,
    height:42,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',

  },
  pressableActive: {
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'flex-start',
    flex: 1,
    paddingBottom: 5,
  },
  textActive: {
    fontSize: 17,
    paddingTop: 5,
    fontWeight: '100',
    color: '#777',
    textAlign: 'center',
  },
  borderActive: {
    minHeight: '30%',
    width: '95%',
    marginHorizontal: 'auto',
  }
})

export default TopTab