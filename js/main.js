document.getElementById('submit_search').addEventListener('click', submitSearch, false);

var apiKey = 'YkSfkAE6iqCb2NCzhzKMtKYevSh2XtEWNwb77Qeq' ;

var playlist = {
  list: [],
  playing: false,
  push: function(item){
    this.list.push(item);
    if (!this.playing) {
      this.start();
    }
  },
  start: function(){
    var container = document.getElementById('video_container');
    container.appendChild(this.list.shift().embed());
    this.playing = true;
  },
  // some callback for when a video finishes playing
};


function submitSearch() {
	var artist = document.getElementById('artist_search').value;
  searchImvdb(artist);
	// searchImvdb('pinback');
}
