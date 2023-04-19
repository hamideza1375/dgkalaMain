import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import Loading from '../components/Loading';
import Badge from '../components/Badge';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Audio = (props) => {

  const [music, setMusic] = useState(null)
  const [progress, setprogress] = useState(0)
  const [second, setsecond] = useState(0)
  const [show, setshow] = useState(true)
  const [change, setchange] = useState(true)
  const [dt, setdt] = useState()

  let summer = useRef()



  const seconder = (date, second) => {
      var countDownDate = new Date(date).getTime()
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      second({ days, hours, minutes, seconds })
    }



  const play = () => {
    summer.current = new Sound(props.source.uri, null, (err) => {
      if (err) {
        console.log('hata', err)
        return
      }
      summer.current.play((success) => {
        console.log('end', success)
      })

      seconder(new Date().getTime() + (Number(summer.current.getDuration() ) * 1000) , ({ days, hours, minutes, seconds }) => {
        setdt( minutes + ':' + seconds)
    })

    })
    console.log('summer.current', summer.current)
    setMusic(summer.current)
  }


  useEffect(() => {
    if (music) {
      setInterval(() => {
        music.getCurrentTime((second, play) => {
          setsecond(second)
          setprogress(Math.max(0, second) / music.getDuration())
        })
      }, 100)
    }
  }, [music])


  useEffect(() => {
    return () => {
      music && music.stop()
    }
  }, [])



  return (
    <View style={[{ backgroundColor: !summer.current ? '#e9e9e9' : '#cfcfcf', paddingTop: 10, width: '100%', height: 100, alignSelf: 'center', borderRadius: 8 }, props.style]} >
      <Slider style={{ width: '90%', alignSelf: 'center' }} onValueChange={(e) => { summer.current && summer.current.setCurrentTime(e * summer.current.getDuration()) }} value={progress} />

      <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around', width:'95%', height:48 }} >

        <View style={{ height: 30, width: 30 }}>
          <Badge style={{ height: 30, width: 30 }} bgcolor='#aaa' top={15} text={Math.floor(second)} />
        </View>
        {summer.current && summer.current.getDuration() === -1 && !change
          ?
          <Loading time={999999} size={11} color={"red"} onPress={() => { setchange(!change); if (show) { play(); setshow(false) } if (!show) { change ? music.play() : music.pause() } }} style={{ width: 30, height: 30, top: 22 }} />
          :
          <Icon name={!change ? "pause" : "play"} size={27} style={{ top: 15 }} onPress={() => { setchange(!change); if (show) { play(); setshow(false) } if (!show) { change ? music.play() : music.pause() } }} />
        }

        <View style={{ height: 30, width: 30 }}>
          <Badge style={{ height: 30, width: 30, }} bgcolor='#aaa' top={15} text={summer.current && summer.current.getDuration() !== -1 ? 
           dt
            : 0} />
        </View>

      </View>

    </View>
  )
}
export default Audio



