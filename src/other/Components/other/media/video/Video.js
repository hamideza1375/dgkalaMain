import React, { useCallback, useState } from 'react'
import { Platform } from 'react-native';
import _Video from "react-native-video";
import _useEffect from '../../../../controllers/_initial';
import { A_icon, Press } from '../../Html';
import download from '../../../utils/download';
import convertToProxyURL from 'react-native-video-cache';
import { useFocusEffect } from '@react-navigation/native';
import { context } from '../../../../context/_context';

const Video = (props) => {

  const { playMusic, setplayMusic } = context()

  const [paused, setpaused] = useState(false)
  const [muted, setmuted] = useState(true)
  const [videoPaused, setvideoPaused] = useState(true)

  const onLoad = () => {
    setpaused(false)
    setmuted(true)
    setTimeout(() => {
      setpaused(true)
      setmuted(false)
    }, 200);
  }


  useFocusEffect(useCallback(() => {
    return () => {
      if (!videoPaused) {
        setvideoPaused(true)
      }
    }
  }, [playMusic]))




  return (
    <>
      {(props.controls) || (Platform.OS === 'ios') ?
        <Press pos='absolute' t={0} r={-2} z={999999} onClick={() => { download(props.source.uri) }} bgcolor='#fff0' br={3} h={50} w={40} style={{ top: 25, transform: [{ scaleX: .9 }, { scaleX: .9 }] }}  >
          <A_icon name={'ellipsis1'} color='#777' size={23} style={{ transform: [{ rotate: '90deg' }], position: 'absolute', zIndex: 99999, right: 5, top: 15 }} />
        </Press>
        :
        <></>
      }
      <_Video
        onTouchEnd={() => setplayMusic(!playMusic)}
        onLoad={Platform.OS === 'android' ? onLoad : () => { }}
        paused={Platform.OS === 'android' ? paused : videoPaused}
        muted={Platform.OS === 'android' ? muted : false}
        repeat={false}
        resizeMode={"stretch"}
        rate={1.0}
        controls={Platform.OS === 'android' ? false : true}
        {...props}
        source={{ uri: convertToProxyURL(props.source.uri) }}
        style={[{ width: '100%', height: '100%', backgroundColor: '#000d' }, props.style]}
      />
    </>
  )
}

export default Video