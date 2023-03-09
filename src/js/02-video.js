import '../css/03-feedback.css';
import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const TIME_KEY = 'videoplayer-current-time';
// const iframe = document.querySelector('iframe');
// const player = new Player (iframe);

// const onPlay = function (data) {
//   const strigifyData = JSON.stringify(data);
//   localStorage.setItem(TIME_KEY, strigifyData);
// };
// player.on('timeupdate', throttle(onPlay, 1000));

// function resumePlayback() {
//   if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
//     return;
//   }
//   const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
//   if (paused) {
//     player
//       .setCurrentTime(paused)
//       .then(function (seconds) {})
//       .catch(function (error) {
//         switch (error.name) {
//           case 'Error':
//             break;
//           default:
//             break;
//         }
//       });
//   }
// }
// resumePlayback();

// import Vimeo from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('#vimeo-player');
// const player = new Vimeo(iframe);

// // Initialize player and start tracking timeupdate event
// player.ready().then(() => {
//   player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
//   player.on('timeupdate', throttle(() => {
//     localStorage.setItem('videoplayer-current-time', player.getCurrentTime());
//   }, 1000));
// });



const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

// Save the current time of the video to localStorage every second
const onPlay = function (data) {
  const strigifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, strigifyData);
};
player.on('timeupdate', throttle(onPlay, 1000));

// Resume playback of the video from the saved time in localStorage
function resumePlayback() {
  const { seconds } = JSON.parse(localStorage.getItem(TIME_KEY) ?? '{}');
  if (seconds) {
    player.setCurrentTime(seconds)
    .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            // handle the error
            break;
          default:
            break;
        }
      });
  }
}
resumePlayback();
