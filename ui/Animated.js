import { Animated, Easing } from "react-native";
//! YourAnimatedValue.setValue(number)
//   fadeAnim.setValue(0)
let hidden;
const open = () => Animated.timing(p.anim, { toValue: 80, duration: 150, easing: Easing.bounce, useNativeDriver: false }).start();
const close = () => Animated.timing(p.anim, { toValue: 0, duration: 150, useNativeDriver: false }).start();
if (!p.courseIdValidator(p.route.params.id)) return p.navigation.navigate('NotFound')



hidden = p.animScale.interpolate({
  inputRange: [0, 1],
  outputRange: [450, e.nativeEvent.pageY - 177]
})

hidden2 = p.animScale.interpolate({
  inputRange: [0, 1],
  outputRange:
    numColumns2 == 1 && [180, e.nativeEvent.pageX - 100] ||
    numColumns2 == 2 && [300, e.nativeEvent.pageX - 100] ||
    numColumns2 == 3 && [550, e.nativeEvent.pageX - 100] ||
    numColumns2 == 4 && [650, e.nativeEvent.pageX - 100]
})
