function Playlist() {
  this.queue = [];
  this.playing = 'false';
  this.now_playing = null;

  this.add_to_queue = function(video) {
    if (video) {
      this.queue.push(video);
    }
  };

  this.play_next = function() {
    // Pull from queue
    // Set now_playing
    // Play video on page
  };
}
