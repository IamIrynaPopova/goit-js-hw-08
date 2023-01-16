import Player from '@vimeo/player';
import Lodash from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const getlocalStorageValue = localStorage.getItem(LOCALSTORAGE_KEY);
const timeValue = JSON.parse(getlocalStorageValue);

const onPlay = function (data) {
    console.log(data);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
player.on('timeupdate', onPlay);
player.setCurrentTime(timeValue.seconds);
