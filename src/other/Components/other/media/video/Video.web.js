
import * as React from 'react';

let r = false, f = false, played = false

export default function App(props) {

  const video = React.useRef()
  const _controls = React.useRef()
  const _play = React.useRef()
  const _stop = React.useRef()
  const _rwd = React.useRef()
  const _fwd = React.useRef()
  const _timer = React.useRef()
  const spanTimer = React.useRef()

  const [width, setwidth] = React.useState(0)

  React.useEffect(() => {

    const _link = document.createElement('link');
    const elem = document.getElementById('mapStyle');
    if (!elem?.id) {
      _link.href = require('./v.css')
      _link.rel = "stylesheet"
      _link.id = 'mapStyle';
      document.head.appendChild(_link);
    }



    video.current.removeAttribute('controls');
    _controls.current.style.visibility = 'visible';

    _play.current.addEventListener('click', playPauseMedia);

    function playPauseMedia() {
      if (!played) {
        _play.current.setAttribute('data-icon', '⫲');
        video.current.play();
        played = true
      } else {
        _play.current.setAttribute('data-icon', '▶');
        video.current.pause();
        played = false
      }
    }

    _stop.current?.addEventListener('click', stopMedia);
    video.current.addEventListener('ended', stopMedia);
    video.current.addEventListener('pause', ()=>{_play.current.setAttribute('data-icon', '▶');});

    function stopMedia() {
      video.current.pause();
      video.current.currentTime = 0;
      _play.current.setAttribute('data-icon', '▶');
    }

    _rwd.current.addEventListener('click', windBackward);
    _fwd.current.addEventListener('click', windForward);


    function windBackward() {
      if (video.current.currentTime <= 5) {
        _rwd.current.classList.remove('active');
        stopMedia();
      } else {
        video.current.currentTime -= 5;
      }
    }

    function windForward() {
      if (video.current.currentTime >= video.current.duration - 5) {
        _fwd.current.classList.remove('active');
        stopMedia();
      } else {
        video.current.currentTime += 5;
      }
    }

    video.current.addEventListener('timeupdate', setTime);

    function setTime() {
      var minutes = Math.floor(video.current.currentTime / 60);
      var seconds = Math.floor(video.current.currentTime - minutes * 60);
      var minuteValue;
      var secondValue;

      if (minutes < 10) {
        minuteValue = '0' + minutes;
      } else {
        minuteValue = minutes;
      }

      if (seconds < 10) {
        secondValue = '0' + seconds;
      } else {
        secondValue = seconds;
      }

      var mediaTime = minuteValue + ':' + secondValue;
      spanTimer.current.textContent = mediaTime;

      var barLength = _timer.current.clientWidth * (video.current.currentTime / video.current.duration);
      setwidth(barLength + 'px');
    }

    _rwd.current.classList.remove('active');
    _fwd.current.classList.remove('active');
    // clearInterval(intervalRwd);
    // clearInterval(intervalFwd);

  }, [])

  const seconder = (secound) => {
    var countDownDate = (secound * 1000)
    var hours = Math.floor((countDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);
    return hours + ':' + minutes + ':' + seconds
  }
  return (
    <div className='ctain' style={{ height: '100%', width: '100%', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center' , ...props.style}}>

      <video ref={video} {...props} style={{ width: '100%', maxHeight: '100vh', height: '100%', objectFit: 'cover', resize:'horizontal' }} controls >
        <source src={props.source.uri} type='video/ogg' />
        <source src={props.source.uri} type='video/mp4' />⫼ ⊭⫵
      </video>
      <div dir='ltr' ref={_controls} className="controls">
        <button ref={_play} className="play" data-icon="▶" aria-label="play pause toggle" />
        {/* <button ref={_stop} className="stop" data-icon="⨴" aria-label="stop"  /> */}
        <div ref={_timer} className="timer" > 
          <div />
          <div style={{ width, height: 32, backgroundColor: 'rgb(124, 123, 123)' }} ></div>
          <span style={{marginLeft:-10}} ref={spanTimer} aria-label="timer" className='timer' >00:00</span>
        </div>
        <button style={{fontSize:10}} children={video.current?.duration ? seconder(video.current.duration) : null} />
        <button ref={_rwd} className="rwd" data-icon="≪" aria-label="rewind" />
        <button ref={_fwd} className="fwd" data-icon="≫" aria-label="fast forward" />
      </div>
    </div>

  );
}