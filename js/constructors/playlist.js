function Playlist() {
  this.queue = [];
  this.playing = 'false';

  this.add_to_queue = function(video) {
    this.queue.push(video);
  };


}
