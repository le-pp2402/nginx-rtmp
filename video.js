const video = document.getElementById('my-video');

const chanel = document.getElementById('chanel').value;
const videoSrc = `http://localhost:81/hls/${chanel}.m3u8`;

if (Hls.isSupported()) {    
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
    video.addEventListener('loadedmetadata', function() {
        video.play();
    });
}