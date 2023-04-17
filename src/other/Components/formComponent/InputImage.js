import React from "react";
import { Animated, KeyboardAvoidingView, Pressable, Text, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Input } from "./FormComponent";
import Swiper from '../components/Swiper'
import { truncate } from "../../utils/truncate";
import { Py } from "../Html";

function InputImage({ plackTextTop, imIconLeft, imIconRight, imageUrl, setImageUrl, _imageUrl, newObj, img, styles, icon, p, mediaType = 'photo' }) {

  const pickImage = () => {
    launchImageLibrary({ mediaType }, (res) => {
      if (!res.didCancel) {
        if (res.assets[0].type === 'image/jpeg' || res.assets[0].type === 'image/jpg' || res.assets[0].type === 'image/png')
          setImageUrl({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri })
        else alert('فرمت عکس باید jpeg یا png باشد')
      }
      else alert('مشکلی پیش آمد دوباره امتحان کنید');
    })
  }

  // const pickVideo = () => {
  //   launchImageLibrary({ mediaType: 'video' }, (res) => {
  //      if (!res.didCancel) setVideoUrl({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri })
  //     else console.log('err');
  //   })
  // }

  // const pickMix = () => {
  //   launchImageLibrary({ mediaType: 'mixed' }, (res) => {
  //     if (!res.didCancel) setMixUrl({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri })
  //     else console.log('err');
  //   })
  // }

  return (
    <KeyboardAvoidingView behavior={"height"} style={[{ height: 70, minHeight: 70, marginVertical: 10, marginTop: 7, marginHorizontal: 10, flexGrow: 1 }]}>
      <View style={{ minHeight: 70, height: 70, marginVertical: 12 }}>
        <Animated.View style={[styles.viewInput, { minHeight: 90 }, { marginBottom: 5 }]} >
          <Swiper cansel={(imIconLeft || imIconRight) ? false : true} style={{ height: '100%', marginBottom: 20, paddingBottom: 20 }}
            styleRightIcon={{ top: 37 }}
            styleLeftIcon={{ top: 37 }}
            iconLeft={imIconLeft}
            iconRight={imIconRight}
          >
            {plackTextTop && <Py fw='100' style={[styles.textinput, { marginTop: 5 }]} >{p}</Py>}
            <Pressable onPress={pickImage} style={[styles.animatedBorder,
            _imageUrl && !img &&
            { borderWidth: 1.2, borderColor: 'red' }]} >
              <Input
                editable={false}
                placeholder={p}
                m_icon={icon}
                value={truncate(imageUrl.name, 15, false)}
                style={styles.input}
              />
            </Pressable>
            {_imageUrl && !img && <Py style={[styles.textinput, { color: 'red', fontSize:13, fontWeight:'100' }]} >
              {newObj}
            </Py>}
          </Swiper>
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default InputImage