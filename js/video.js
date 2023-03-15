const video_01 = document.getElementById('video-01');

function togglePlay(video) {
    if (video.paused) {
        video.play();
        console.log('play');
    } else {
        video.pause();
        console.log('pause');
    }
}

video_01.addEventListener('click', togglePlay(this));