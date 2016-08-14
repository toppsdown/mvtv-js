

// Initialize the State of the page
var domManager = new DomManager();
var library = new Library();
var playlist = new Playlist();

// Initiatlize the event bindings
function bindSubmitSearch(){
  domManager.addEventListener('click', submitSearch, false);
}

// Define the functions for the page
function submitSearch() {
	var artist = document.getElementById('artist_search').value;
  library.search(artist);
}

function queueVideo(){
  var vid = library.pickVideo();
  if (vid){
    playlist.add_to_queue(vid);
    domManager.appendToVidList(vid.name);
  }
}




// Just for testing:
library.search('pinback');

