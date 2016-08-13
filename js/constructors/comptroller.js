function Comptroller() {

  // Building the playlist
  this.playlist = new Playlist();

  this.library = new Library();
  this.library.populate();

  this.playlist.queue(this.library.pick(10));






  // video player logic
  this.player = new YT.Player('video_container', {
    width: VIDWIDTH,
    height: VIDHEIGHT,
    events: {
      'onReady': this.onReadyHandler,
      'onStateChange': this.handlePlayerStateChange
    }
  });

  function onReadyHandler(event) {
    event.target.playVideo();
  }

  function handlePlayerStateChange(event) {

  }
}
