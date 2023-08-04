
import React, { useEffect, useRef } from "react";
import { Animated, PanResponder, Platform } from "react-native";
import { Badge, M_icon, Press } from '../../other/Components/Html'
import { getSocketIoSeenUser } from "../../services/clientService";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Cat = (p) => {

  useEffect(() => {
    (async () => {
      const socketTocken = await AsyncStorage.getItem('socketTocken')
      const { data } = await getSocketIoSeenUser(socketTocken)
      const getTime = await AsyncStorage.getItem('socketDate')
      if (data && !p.tokenValue.isAdmin && data.getTime > JSON.parse(getTime)) p.setsocketIoSeen(true)
    })()
  }, [])


  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => { pan.setOffset({ x: pan.x._value, y: pan.y._value }); },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => { pan.flattenOffset(); }
    })
  ).current;

  return (
    <Animated.View style={[{ height: 50, width: 50, position: 'absolute', bottom: p.width > 437 ? 30 : 60, left: 40, position: Platform.OS === 'web' ? 'fixed' : 'absolute' }, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]} {...panResponder.panHandlers}>
      <Press onClick={() => p.navigation.navigate('SocketIo')} sh={{ r: 6, o: .5 }} el={2} jc='center' ai='center' br={70} bgcolor='#909' f={1} >
        <M_icon color='#fff' name='chat' size={30} />
        {p.socketIoSeen ? <Badge right={0} top={-2} bgcolor='#0f5' /> : <></>}
      </Press>
    </Animated.View>
  );
}
export default Cat;