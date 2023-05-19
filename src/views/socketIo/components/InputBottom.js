import { Platform } from "react-native";
import { Column, Dropdown, Icon, Input, M_icon, Press } from "../../../other/Components/Html";
import { axios, localhost } from "../../../other/utils/axios/axios";
import { imagePicker } from "../../../other/utils/imagePicer";

export default function InputBottom(p) {

  const imageChat = (data) => axios.postData(`${localhost}/imageChat`, data)
  const videoChat = (data) => axios.postData(`${localhost}/videoChat`, data)
  const audioChat = (data) => axios.postData(`${localhost}/audioChat`, data)


  const sendMessage = (type, fileName) => {
    if (type === 'image') {
      p.socket.current.emit("pvChat", {
        userId: p.tokenSocket.current,
        to: p.to,
        isAdmin: p.tokenValue.current.isAdmin,
        uri: fileName,
        type: 'image'
      });
    }
    else if (type === 'video') {
      p.socket.current.emit("pvChat", {
        userId: p.tokenSocket.current,
        to: p.to,
        isAdmin: p.tokenValue.current.isAdmin,
        uri: fileName,
        type: 'video'
      });
    }
    else if (type === 'audio') {
      p.socket.current.emit("pvChat", {
        userId: p.tokenSocket.current,
        to: p.to,
        isAdmin: p.tokenValue.current.isAdmin,
        uri: fileName,
        type: 'audio'
      });
    }
  }


  const _imagePicker = () => {
    imagePicker().then(async (res) => {
      let uriParts = res.name.split('.');
      let fileType = uriParts[uriParts.length - 1];
      const imageName = `${(new Date().getTime() + Math.random() * 1000000).toString()}.${fileType}`;
      await imageChat({ uri: res, imageName })
      sendMessage('image', imageName);
      p.setshownDropdown(false);
    })
  }


  const _videoPicker = () => {
    imagePicker('video').then(async (res) => {
      let uriParts = res.name.split('.');
      let fileType = uriParts[uriParts.length - 1];
      const videoName = `${(new Date().getTime() + Math.random() * 1000000).toString()}.${fileType}`;
      await videoChat({ uri: res, videoName })
      sendMessage('video', videoName);
      p.setshownDropdown(false);
    })
  }


  const _audioPicker = () => {
    imagePicker('audio').then(async (res) => {
      let uriParts = res.name.split('.');
      let fileType = uriParts[uriParts.length - 1];
      const audioName = `${(new Date().getTime() + Math.random() * 1000000).toString()}.${fileType}`;
      await audioChat({ uri: res, audioName })
      sendMessage('audio', audioName);
      p.setshownDropdown(false);
    })
  }



  return (
    <Column jc='center' ai='center' style={{
      borderRadius: 5,
      minWidth: '100%',
      height: '20%',
      minHeight: 70,
      maxHeight: 70,
      alignSelf: 'center',
      backgroundColor: '#aac'
    }} >
      <Column w='95%' >
        <Column col1={{ left: 75 }} style={{ position: 'absolute', left: 90, zIndex: 111, }}>
          <Column w={30} h={50} jc='center' ai='center'  >
            <Dropdown top={50} value={
              <Press onClick={()=>{}} fd='row' h={60} jc='center' ai='center' border={3} >
                <Press h={'100%'} border={[1,'silver']} onClick={_imagePicker}  w={60} jc='center' ai='center' >
                  <Icon name={'image'} size={25} color={'#777'} />
                </Press>
                <Press h={'100%'} border={[1,'silver']} onClick={_videoPicker} w={60} jc='center' ai='center' >
                  <Icon name={'video'} size={25} color={'#777'} />
                </Press>

                {Platform.OS === 'web' ?
                  <Press h={'100%'} border={[1,'silver']} onClick={_audioPicker} w={60} jc='center' ai='center' >
                    <M_icon name={'audiotrack'} size={25} color={'#777'} />
                  </Press>
                  :
                  <></>
                }

              </Press>
            } />
            <Icon name={'paperclip'} size={20} color={'#999'} style={{ position: 'absolute', zIndex: -1 }} />
          </Column>
        </Column>
        <Input multiline maxLength={1000} min={99} style={{ minHeight: 50 }} iconSize={24}
          value={p.pvMessage} onChange={(e) =>{ p.setpvMessage(e.nativeEvent.text); p.handleKeypress(e, p.to)}}
          iconPress={() => { p.handlePvChat(); p.setpvMessage('') }} icon="paper-plane" iconColor="#38a" color="#25a" placeholder="ارسال پیام"
        />
      </Column>
    </Column>
  )
}