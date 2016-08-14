// This sets the stage for the full project
// but I want to get the basics working first

function Library() {
  // Initialize
    // Execute search
    // Generate artist list

  this.artistList = [];

  this.pickVideo = function(){
    var artist = this.artistList[0];
    if (artist) {
      return artist.pickVideo();
    } else {
      console.log('ERROR: NO ARTISTS AVAILABLE');
      return null;
    }
  };

  this.present = function(){
    var libraryState = {artists: []};

    this.artistList.forEach(function(artist){
      libraryState.artists.push(artist.present());
    });

    return libraryState;
  };

  this.search = function(query) {
    new Imvdb(this).queryVideos(query);
  };

  this.storeResults = function(results) {
    var artist = new Artist(results.artistName);
    artist.appendVideos(results.videoIds);
    this.artistList.push(artist);
  };
}

function Artist(name) {
    this.name = name;
    this.availableVideoIds = [];
    this.usedIds = [];

    this.appendVideos = function(newVideoIds){
      this.availableVideoIds = this.availableVideoIds.concat(newVideoIds);
    };

    this.pickVideo = function(){
      var retId = this.availableVideoIds.pop();
      if (retId){
        this.usedIds.push(retId);
        return retId;
      } else {
        console.log('Artist \'{name}\' has no more videos'.supplant({name: this.name}));
        return null;
      }
    };

    this.present = function(){
      var artistState = {
        availableVideos: [],
        usedVideos: []
      };

      this.availableVideoIds.forEach(function(video) {
        artistState.availableVideos.push(video);
      });

      this.usedIds.forEach(function(video) {
        artistState.usedVideos.push(video);
      });

      return artistState;
    };

  // make request for vid list
  // create a vid object for each
  // need two arrays, 1 for unused vids, and one for used vids for the shuffle
}

function Video(imvdbId) {
  // make the request for video information
}








