document.getElementById('submit_search').addEventListener('click', submitSearch, false);

var apiKey = 'YkSfkAE6iqCb2NCzhzKMtKYevSh2XtEWNwb77Qeq' ;


var library = new Library();
library.search('pinback');
// playlist = new Playlist();


function submitSearch() {
	var artist = document.getElementById('artist_search').value;
  // library.search(artist);
  library.search(pinback);
}
