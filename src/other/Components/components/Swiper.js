import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet } from "react-native";
// pan.addListener(({ value }) => setPan2(value));


const App = ({children, style, iconLeft, iconRight, cansel, styleLeftIcon, styleRightIcon, width}) => {
  var das = []

  const pan = useRef(new Animated.Value(0)).current;
  const [right, setright] = useState(false)
  const [left, setleft] = useState(false)



  const toRight = () => {
    Animated.timing(pan, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false
    }).start()
  };

  const close = () => {
    Animated.timing(pan, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const toLeft = () => {
    Animated.timing(pan, {
      toValue: -100,
      duration: 500,
      useNativeDriver: false
    }).start();
  };



  return (
    <View style={[styles.container,{width:width }]}>
      <View style={{minWidth: '100%'}} >
        <View style={[{ position: 'absolute', backgroundColor: ' red', top: 7, left: 5 },styleRightIcon]} >
          {iconRight}
        </View>

        <View style={[{ position: 'absolute', backgroundColor: ' red', top: 7, right: 5 },styleLeftIcon]} >
          {iconLeft}
        </View>

        <Animated.View
          testID="1"
          onMoveShouldSetResponder={(e) => {
            if(!cansel){
            if (das.length > 2) das = []
            das.push(e.nativeEvent.pageX)
            if (das.length > 2 && das.length <= 3) {
              if ((das[0] < das[1]) == false) {
                if (!right) {
                  if(iconRight){
                  toLeft()
                  setTimeout(() => {
                    setleft(true)
                  }, 1000);
                }
              }
                else {
                  close()
                  setTimeout(() => {
                    setright(false)
                  }, 1000);
                }
              }
              else {
                if (!left) {
                  if(iconLeft){
                  toRight()
                  setTimeout(() => {
                    setright(true)
                  }, 1000);
                }
                }
                else {
                  close()
                  setTimeout(() => {
                    setleft(false)
                  }, 1000);
                }}
            }
          }
          }}
          // onStartShouldSetResponder={()=>{}}
          style={[ { transform: [{ translateX: pan }] }, { minWidth:'100%', minHeight:50}, style]}>
          {children}

        </Animated.View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white'
  }
});

export default App;