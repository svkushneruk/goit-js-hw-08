import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const SAVED_TIME_KEY = 'videoplayer-current-time';

if (localStorage.getItem(SAVED_TIME_KEY)) {
  player.setCurrentTime(localStorage.getItem(SAVED_TIME_KEY));
}

player.on('timeupdate', throttle(onTimeUpdateHandle, 1000));

function onTimeUpdateHandle(data) {
  localStorage.setItem(SAVED_TIME_KEY, data.seconds);
}
