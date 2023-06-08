import { Share } from "react-native"

 const share = async(url, title) => {
   try{ await Share.share({url, message:url, title})}
   catch(err){console.log(err); alert('ارسال لینک انجام نشد') }
}

// await Share.share({url:'http://192.168.42.34/upload/_dv2jBs-b_847B5F59-1878-42ED-ADC0-0858D4361B15.jpg', message: 'http://192.168.42.34/upload/_dv2jBs-b_847B5F59-1878-42ED-ADC0-0858D4361B15.jpg'})
export default share