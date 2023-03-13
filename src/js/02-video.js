import '../css/03-feedback.css';
import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(event) {
  localStorage.setItem(STORAGE_TIME_KEY, event.seconds);
}, 1000));

const storedTime = localStorage.getItem(STORAGE_TIME_KEY);
if (storedTime) {
  player.setCurrentTime(storedTime);
}
