import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const getlocalStorageValue = localStorage.getItem(LOCALSTORAGE_KEY);
const timeValue = JSON.parse(getlocalStorageValue);

const onPlay = function (data) {
    console.log(data);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

const throttleOnPlay = throttle(onPlay,1000);
player.on('timeupdate', throttleOnPlay);
player.setCurrentTime(timeValue.seconds);
