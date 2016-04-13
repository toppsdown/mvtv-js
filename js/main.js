document.getElementById('submit_search').addEventListener('click', submitSearch, false);

var apiKey = 'YkSfkAE6iqCb2NCzhzKMtKYevSh2XtEWNwb77Qeq' ;

var playlist = {
  queue: [],
  playing: false,
  push: function(item){
    this.list.push(item);
    if (!this.playing) {
      this.start();
    }
  },
  start: function(){
    window.player = new YT.Player('video_container', {
      width: VIDWIDTH,
      height: VIDHEIGHT,
      videoId: this.list.shift().sourceId,
      events: {
        'onReady': onReadyHandler,
        'onStateChange': handlePlayerStateChange
      }
    });
    // var container = document.getElementById('video_container');
    // container.appendChild(this.list.shift().nativeEmbed());
    // this.list.shift().play()
    this.playing = true;
  },
  playNext: function(){
    this.queue.shift().play();
  }
};


function submitSearch() {
	var artist = document.getElementById('artist_search').value;
  // searchImvdb(artist);
	searchImvdb('pinback');
}

function handlePlayerStateChange(event) {
  switch(event.data) {
    case YT.PlayerState.ENDED:
      playlist.playNext();
      break;
    default:
      break;
  }
}

var player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('video_container', {
//     width: VIDWIDTH,
//     height: VIDHEIGHT,
//     events: {
//       'onReady': onReadyHandler,
//       'onStateChange': handlePlayerStateChange
//     }
//   });
// }

function onReadyHandler(event) {
  event.target.playVideo();
}
