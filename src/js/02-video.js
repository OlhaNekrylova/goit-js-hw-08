import Player from "@vimeo/player";
import throttle from 'lodash.throttle';
import '../css/common.css';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
});

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);

player.on('timeupdate', throttle(onPlayUpdate, 1000));

function onPlayUpdate (event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
}
