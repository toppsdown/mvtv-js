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
    artist.videoIds = artist.videoIds.concat(results.videoIds);
    this.artistList.push(artist);
  };

  this.pickVideo = function(){
    var artist = this.artistList[0];
    if (artist) {
      return artist.pickVideo();
    } else {
      console.log('ERROR: NO ARTISTS AVAILABLE');
      return null;
    }
  };
}

function Artist(name) {
    this.name = name;
    this.videoIds = [];
    this.usedIds = [];

    this.pickVideo = function(){
      var retId = this.videoIds.pop();
      if (retId){
        this.usedIds.push(retId);
        return retId;
      } else {
        console.log('Artist \'{name}\' has no more videos'.supplant({name: this.name}));
        return null;
      }
    };

  // make request for vid list
  // create a vid object for each
  // need two arrays, 1 for unused vids, and one for used vids for the shuffle
}

function Video(imvdbId) {
  // make the request for video information
}








