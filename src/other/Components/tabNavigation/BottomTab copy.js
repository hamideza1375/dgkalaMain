import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Keyboard, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const BottomTab = ({ group, children, name, style, bgcolor = '#fff', color = "#777", activeColor = "#47f" }) => {
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
    <View style={styles.container} >
      <View style={{ flex: 1, maxHeight: '94%' }} >
        {children}
      </View>

      {show && <View opacity={1} style={[styles.sidebar, { backgroundColor: bgcolor }, style]} >
        {group?.map((r, key) => (
          <View key={key} style={[styles.routeView, { backgroundColor: 'transparent', }]} >
            <View style={[styles.pressableActive, { backgroundColor: 'transparent' }]} >
              <Icon
                onPress={() => { navigation.navigate(r.navigate ? r.navigate : r.title, { ...r.params }); r.setnavigate && r.setnavigate(r.mainTitle) }}
                name={r.icon} size={r.icon === 'comments' ? 29 : 26} style={{ color: name == r.title ? activeColor : color }} />
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
    position: 'relative',
    flex: 1

  },
  sidebar: {
    height: '6%',
    minHeight: 38,
    bottom: 0,
    position: Platform.OS === 'web' ? 'fixed' : 'relative',
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