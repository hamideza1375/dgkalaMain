import React, { useMemo, useState } from 'react'
import { Pressable } from 'react-native';

const useForceUpdate = () => {
  const set = useState(0)[1];
  return () => set((s) => s + 1);
};

const fastReafreshing = () => {
  const forceUpdate = useForceUpdate();

  return (
    <Pressable onPress={forceUpdate} >fastReafreshing</Pressable>
  )
}




const fastReafreshing2 = () => {
  const [x, setx] = useState(0)
  useMemo(() => x * 2, [x])
  // useMemo(() => x * 10, [x])

  return (
    <Pressable onPress={() => setx((x) => x + 1)} >fastReafreshing</Pressable>
  )
}



export default fastReafreshing


