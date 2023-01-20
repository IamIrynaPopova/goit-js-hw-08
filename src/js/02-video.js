import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const getlocalStorageValue = localStorage.getItem('videoplayer-current-time');
const timeValue = JSON.parse(getlocalStorageValue);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(timeValue.seconds);
