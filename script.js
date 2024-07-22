document.addEventListener('DOMContentLoaded', function () {
    // Home page audio controls
    const homeAudioPlayer = document.getElementById('home-audio-player');
    const homePlayPauseBtn = document.getElementById('home-play-pause-btn');
    const homeVolumeSlider = document.getElementById('home-volume-slider');

    homePlayPauseBtn.addEventListener('click', function () {
        if (homeAudioPlayer.paused) {
            homeAudioPlayer.play();
            homePlayPauseBtn.textContent = 'Pause';
        } else {
            homeAudioPlayer.pause();
            homePlayPauseBtn.textContent = 'Play';
        }
    });

    homeVolumeSlider.addEventListener('input', function () {
        homeAudioPlayer.volume = homeVolumeSlider.value;
    });
});
