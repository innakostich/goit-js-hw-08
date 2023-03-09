import '../css/03-feedback.css';
import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function (data) {
  const strigifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, strigifyData);
};
player.on('timeupdate', throttle(onPlay, 1000));


  function resumePlayback() {
  const { seconds } = JSON.parse(localStorage.getItem(TIME_KEY)) ['seconds'];
  if (seconds) {
    player.setCurrentTime(seconds)
    .then(function () {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
            default:
            break;
        }
      });
  }
}
resumePlayback();





