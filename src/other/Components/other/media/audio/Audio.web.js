
import * as React from 'react';

let r = false, f = false, played=false

export default function App(props) {

  const audio = React.useRef()
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
    const elem = document.getElementById('mapStyle2');
    if (!elem?.id) {
      _link.href = require('./a.css')
      _link.rel = "stylesheet"
      _link.id = 'mapStyle2';
      document.head.appendChild(_link);
    }



    audio.current.removeAttribute('controls');
    _controls.current.style.visibility = 'visible';

    _play.current.addEventListener('click', playPauseMedia);
    audio.current.addEventListener('pause', ()=>{_play.current.setAttribute('data-icon', '▶');});

    function playPauseMedia() {
      if (!played) {
        _play.current.setAttribute('data-icon', '⫲');
        audio.current.play();
        played=true
      } else {
        _play.current.setAttribute('data-icon', '▶');
        audio.current.pause();
        played=false
      }
    }

    _stop.current?.addEventListener('click', stopMedia);
    audio.current.addEventListener('ended', stopMedia);

    function stopMedia() {
      audio.current.pause();
      audio.current.currentTime = 0;
      _play.current.setAttribute('data-icon', '▶');
    }

    _rwd.current.addEventListener('click', windBackward);
    _fwd.current.addEventListener('click', windForward);


    function windBackward() {
      if (audio.current.currentTime <= 5) {
        _rwd.current.classList.remove('active');
        stopMedia();
      } else {
        audio.current.currentTime -= 5;
      }
    }

    function windForward() {
      if (audio.current.currentTime >= audio.current.duration - 5) {
        _fwd.current.classList.remove('active');
        stopMedia();
      } else {
        audio.current.currentTime += 5;
      }
    }

    audio.current.addEventListener('timeupdate', setTime);

    function setTime() {
      var minutes = Math.floor(audio.current.currentTime / 60);
      var seconds = Math.floor(audio.current.currentTime - minutes * 60);
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

      var barLength = _timer.current.clientWidth * (audio.current.currentTime / audio.current.duration);
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
    <div className='player' style={{height:40, display:'flex', justifyContent:'center', alignItems:'center', ...props.style}} >
      <audio {...props} ref={audio} style={{ width: '100%', maxHeight: '100vh', objectFit: 'cover' }} controls >
        <source src={props.source.uri} type='audio/ogg' />
        <source src={props.source.uri} type='audio/mp4' />
      </audio>
      <div dir='ltr' ref={_controls} className="controls2">
        <button ref={_play} className="play" data-icon="▶" aria-label="play pause toggle" />
        {/* <button ref={_stop} className="stop" data-icon="⚫" aria-label="stop" style={{ transform: 'scale(.8)', borderWidth: 0 }} /> */}
        <div ref={_timer} className="timer" >
          <div />
          <div style={{width,height:32, backgroundColor:'rgb(124, 123, 123)'}} ></div>
          <span style={{marginLeft:-10}} ref={spanTimer} aria-label="timer" >00:00</span>
        </div>
        <button style={{fontSize:10}} children={audio.current?.duration ? seconder(audio.current.duration) : null} />
        <button ref={_rwd} className="rwd" data-icon="≪" aria-label="rewind" />
        <button ref={_fwd} className="fwd" data-icon="≫" aria-label="fast forward" />
      </div>
    </div>

  );
}