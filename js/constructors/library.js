// This sets the stage for the full project
// but I want to get the basics working first

function Library() {
  // Initialize
    // Execute search
    // Generate artist list

  this.artistList = [];

  this.parseResponse = function(response) {
    var results = response.results;
    var artists = results[0].artists;
    var videos = results.map(function(result){
      return {
        id: result.id,
        name: result.song_title
      };
    });

    var simplifiedResponse = {
      // this will break if multiple artists
      artistName: artists[0].name,
      videos: videos
    };

    this.storeResults(simplifiedResponse);
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
    artist.appendVideos(results.videos);
    this.artistList.push(artist);
  };
}
