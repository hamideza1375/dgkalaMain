import {useNetInfo} from "@react-native-community/netinfo";

export default function online() {
  const netInfo = useNetInfo()
  this.isConnected = netInfo.isConnected
}