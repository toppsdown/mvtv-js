document.getElementById('submit_search').addEventListener('click', submitSearch, false);

var library = new Library();
library.search('pinback');

var playlist = new Playlist();

function submitSearch() {
	var artist = document.getElementById('artist_search').value;
  // library.search(artist);
  library.search(pinback);
}

function queueVideo(){
  playlist.add_to_queue(library.pickVideo());
  return playlist.queue;
}
