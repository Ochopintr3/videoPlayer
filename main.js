function playVideo() {
    document.querySelector('.thumbnail').style.display = 'none';
    document.querySelector('.play-button').style.display = 'none';

    var playerDiv = document.getElementById('player');
    playerDiv.style.display = 'block';

    var player = new YT.Player('player', {
        height: '315',
        width: '100%',
        videoId: 'hcFSFjJ2b6o',
        events: {
            'onReady': onPlayerReady,
        }
    });

    function onPlayerReady(event) {
        event.target.playVideo();
    }
}