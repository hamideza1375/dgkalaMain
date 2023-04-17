import { View } from "react-native";
import { Input } from "../../other/Components/Html";

export default function InputBottom(props) {
  return (
    <View style={{
      paddingTop: 10,
      borderRadius: 5,
      minWidth: '100%',
      height: '20%',
      minHeight: 80,
      maxHeight: 80,
      alignSelf: 'center',
      backgroundColor: '#aac'
    }}>
      <View style={{
        borderRadius: 5,
        width: '91%',
        alignSelf: 'center'
      }}>
        <View style={{
          minWidth: '100%'
        }}>
          <View style={{
            top: 9,
            width: 26,
            height: 30,
            zIndex: 111,
            alignSelf: 'flex-end',
            marginLeft: '16%'
          }}>
            {/* <Icon name='paperclip' size={27} color='#7777' onPress={props._imagePicker} /> */}
          </View>
          <Input fg={0} multiline maxLength={1000} style={{
            height: 55,
            position: 'absolute',
            width: '100%'
          }} iconSize={24} styleIcon={{
            transform: [{
              rotate: '-125deg'
            }]
          }}
            /* onSubmitEditing={() => { props.handlePvChat(); props.setpvMessage('') }} */ value={props.pvMessage} onChange={(e) => props.setpvMessage(e.nativeEvent.text)}
            iconPress={() => { props.handlePvChat(); props.setpvMessage('') }} icon="paper-plane" iconColor="#38a" color="#25a" placeholder="ارسال پیام" />
        </View>
      </View>
    </View>);
}
