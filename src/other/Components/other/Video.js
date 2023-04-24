import React, { useState } from 'react'
import { Platform } from 'react-native';
import _Video from "react-native-video";
import _useEffect from '../../../controllers/_initial';
import { A_icon, Press } from '../Html';
import download from '../../utils/download';

const Video = (props) => {

  const [paused, setpaused] = useState(false)
  const [muted, setmuted] = useState(true)

  const onLoad = () => {
    setpaused(false)
    setmuted(true)
    setTimeout(() => {
      setpaused(true)
      setmuted(false)
    }, 200);
  }


  return (
    <>
      {(props.controls) || (Platform.OS === 'ios') ?
        <Press pos='absolute' z={100} t={0} r={-2} bgcolor='#0007' br={3} h={25} w={20} style={{ transform: [{ scaleX: .9 }, { scaleX: .9 }] }}  >
          <A_icon name={'ellipsis1'} color='white' size={23} style={{ transform: [{ rotate: '90deg' }], position: 'absolute', zIndex: 99999 }}
            onClick={() => { download(props.source.uri) }}
          />
        </Press>
        :
        <></>
      }
      <_Video
        onLoad={Platform.OS === 'android' ? onLoad : () => { }}
        paused={Platform.OS === 'android' ? paused : true}
        muted={Platform.OS === 'android' ? muted : false}
        repeat={false}
        resizeMode={"stretch"}
        rate={1.0}
        controls={Platform.OS === 'android' ? false : true}
        {...props}
        style={[{ width: '100%', height: '100%', backgroundColor: 'silver' }, props.style]}
      />
    </>
  )
}

export default Video