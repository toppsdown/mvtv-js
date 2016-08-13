// This sets the stage for the full project
// but I want to get the basics working first

function Library() {
  // Initialize
    // Execute search
    // Generate artist list

  this.artistList = [];

  this.search = function(query) {
    new Imvdb(this).queryVideos(query);
  };

  this.storeResults = function(results){
    var artist = new Artist(results.artistName);
    artist.videoIds.push(results.videoIds);
    this.artistList.push(artist);
  };


  // Random pick

}

function Artist(name) {
    this.name = name;
    this.videoIds = [];

  // make request for vid list
  // create a vid object for each
  // need two arrays, 1 for unused vids, and one for used vids for the shuffle
}

function Video(imvdbId) {
  // make the request for video information
}








