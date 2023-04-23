import AsyncStorage from "@react-native-async-storage/async-storage"
import seconder from "./seconder"

export const timerThreeMinut = async (settwoMinut, call = () => { }) => {
  const localDate = await AsyncStorage.getItem('localDate')
  const oldDate = localDate && localDate > new Date().getTime() ? JSON.parse(localDate) : new Date().getTime() + (1000 * 60 * 3)
  seconder(new Date(oldDate), async ({ days, hours, minutes, seconds, interval }) => {
    call(interval)
    settwoMinut(minutes + ':' + seconds)
    if ((!minutes && !seconds) || (minutes <= 0 && seconds <= 0)) setTimeout(() => { settwoMinut(0) }, 2000);
    if ((!minutes && !seconds) || (minutes <= 0 && seconds <= 0)) await AsyncStorage.removeItem('localDate')
  })
  await AsyncStorage.setItem('localDate', String(oldDate))
}
