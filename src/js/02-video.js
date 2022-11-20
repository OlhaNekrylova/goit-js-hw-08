import vimeoPlayer from "@vimeo/player";
import throttle from 'lodash.throttle';
import '../css/common.css';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
// iframe.addEventListener('click', throttle(onIframeClick, 1000));

const player = new Vimeo.Player(iframe);
const data = {
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
};

// function onPlayUpdate(event) {
//     event.preventDefault();
// }

player.on('timeupdate', throttle(onPlayUpdate, 1000));

function onPlayUpdate (event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
}

player.setCurrentTime(30.456).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });

    

