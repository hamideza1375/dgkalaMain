import React, { useRef, useEffect } from "react";
import { Easing, Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

const App = () => {

  useEffect(() => {
    console.disableYellowBox = true
  }, [])


  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;


  const fadeOut = () => {
    Animated.sequence([

      Animated.timing(fadeAnim, {
        toValue: 150,
        duration: 1000,
      }),
      Animated.spring(fadeAnim2, {
        toValue: 2.5,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.spring(fadeAnim2, {
        toValue: 1,
      })

    ]).start()

  };




  return (
    <SafeAreaView style={styles.container}>

      <Animated.View
        style={[styles.fadingContainer,
        { transform: [{ scale: fadeAnim2 }, { translateY: fadeAnim }] }]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>

      <View style={styles.buttonRow}>
        <Button title="hidden" onPress={fadeOut} />

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    textAlign: 'center',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default App;