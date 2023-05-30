import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Keyboard, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Badge, Press, Py } from '../Html';

const BottomTab = ({ productBasket, group, children, name, style, bgcolor = '#fff', color = "#777", activeColor = "#47f", socketIoSeen }) => {
  const navigation = useNavigation()
  const [show, setshow] = useState(true)

  useFocusEffect(useCallback(() => {
    if (Platform.OS === 'android') {
      try {
        Keyboard.removeAllListeners('keyboardDidShow')
        Keyboard.removeAllListeners('keyboardDidHide')
        Keyboard.addListener(('keyboardDidShow'), () => setshow(false))
        Keyboard.addListener(('keyboardDidHide'), () => setshow(true))
      } catch (error) { }
    }
  }, []))

  return (
    <View style={[styles.container]} >
      <View style={{ flex: 1, maxHeight: '94%' }} >
        {children}
      </View>

      {show && <View opacity={1} style={[styles.sidebar, { backgroundColor: bgcolor, }, style]} >
        {group?.map((r, key) => (
          <View key={key} style={[styles.routeView, { backgroundColor: 'transparent', }]} >
            <View style={[styles.pressableActive, { alignItems: 'center' }, { backgroundColor: 'transparent' }]} >
              <Icon
                onPress={() => { navigation.navigate(!r.navigate ? (r.mainTitle ? r.mainTitle : r.title) : r.navigate, { ...r.params }) }}
                name={r.icon} size={r.icon === 'comments' ? 18 : 18} style={{ color: name == r.title ? activeColor : color, marginTop: r.name ? 0 : 4, width:30, textAlign:'center' }} />
              {(r.icon === 'comments') && socketIoSeen ? <Badge onClick={() => { navigation.navigate(!r.navigate ? (r.mainTitle ? r.mainTitle : r.title) : r.navigate, { ...r.params }) }} bgcolor='#0e5' top={2} scale={.8} mr={25} /> : <></>}
              {(r.icon === 'shopping-cart') && (productBasket && Object.values(productBasket).length) ? <Badge onClick={() => { navigation.navigate(!r.navigate ? (r.mainTitle ? r.mainTitle : r.title) : r.navigate, { ...r.params }) }} bgcolor='#0e5' top={2} scale={.8} mr={-25} /> : <></>}
              {r.name ?
                <Py
                  onClick={() => { navigation.navigate(!r.navigate ? (r.mainTitle ? r.mainTitle : r.title) : r.navigate, { ...r.params }) }}
                  fw='100' fs={8} mt={4} color={name == r.title ? activeColor : color} >{r.name}</Py>
                :
                <Press w={18} h={18} onClick={() => { navigation.navigate(!r.navigate ? (r.mainTitle ? r.mainTitle : r.title) : r.navigate, { ...r.params }) }}/>
              }
            </View>
          </View>
        ))}
      </View>}
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  sidebar: {
    height: '6%',
    minHeight: 40,
    bottom: 0,
    // position: Platform.OS === 'web' ? 'fixed' : 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 15,
    shadowColor: '#333',
    shadowOpacity: .3,
    shadowRadius: 7,

  },
  routeView: {
    flex: 1,
    height: 60,

  },
  pressableActive: {
    paddingTop: 7,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    flex: 1,
    top: 5
  },
})

export default BottomTab