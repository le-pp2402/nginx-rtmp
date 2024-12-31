const video = document.getElementById('my-video');
const videoSrc = '/hls/random.m3u8'; // Đường dẫn tới file HLS playlist

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