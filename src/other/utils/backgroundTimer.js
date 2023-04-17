import _BackgroundTimer from 'react-native-background-timer';

const backgroundTimer = (timerValue,time) => _BackgroundTimer.runBackgroundTimer(()=>{timerValue()},time)

export default backgroundTimer