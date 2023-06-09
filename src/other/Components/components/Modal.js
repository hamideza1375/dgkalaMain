import React  from "react";
import { Modal as _Modal, Platform, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Scroll } from "../Html";


export default function Modal({ style, children, setshow, show, onClick, onHidden }) {

  return (
    <Pressable onPress={Platform.OS === 'web' ? onClick : () => { }} style={{ height: 0 }}>
      <_Modal onDismiss={onHidden} supportedOrientations={['portrait', 'landscape']}
        animationType="fade" transparent={true} visible={show}>
        <ScrollView onTouchMove={Platform.OS !== 'web' ? onClick : () => { }} contentContainerStyle={[styles.centeredView, {paddingTop:Platform.OS === 'ios'? 38: 0, backgroundColor: '#6669'}]}>
          <View style={[styles.modalView, style]}>
              <Icon onPress={() => setshow(false)} name={"close"} size={22} color="#f55" style={{ position: 'absolute', left: 10, top: 10, zIndex: 111, backgroundColor:'#0001', borderRadius:2, }} />
            <Scroll w='100%' h='100%' fg={1} ccStyle={style}>
              {children}
            </Scroll>
          </View>
        </ScrollView>
      </_Modal>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .8,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 2
    },
  },
});