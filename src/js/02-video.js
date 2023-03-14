import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const stopTimeValue = localStorage.getItem(LOCALSTORAGE_KEY);
let currentTime;

player.on(
  'timeupdate',
  throttle(function (event) {
    currentTime = event.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
    console.log(currentTime);
  }, 1000)
);

player
  .setCurrentTime(stopTimeValue)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
