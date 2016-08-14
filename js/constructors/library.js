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

function Artist(name) {
    this.name = name;
    this.availableVideos = [];
    this.usedVideos = [];

    this.usedIds = [];

    this.appendVideos = function(newVideos){
      this.availableVideos = this.availableVideos.concat(newVideos);
    };

    this.availableVideoIds = function(){
      return this.availableVideos.map(function(videoStruct){
        return videoStruct.id;
      });
    };

    this.availableVideoNames = function(){
      return this.availableVideos.map(function(videoStruct){
        return videoStruct.name;
      });
    };

    this.pickVideo = function(){
      var retVid = this.availableVideos.pop();
      if (retVid){
        vidObject = new Video(retVid);
        vidObject.queryDetails();
        this.usedVideos.push(vidObject);
        return vidObject;
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
}

function Video(videoProps) {
  // expects { id: , name: }
  this.id = videoProps.id;
  this.name = videoProps.name;
  this.urlPresent = false;

  this.parseResponse = function(response) {
    var source = response.sources[0];
    this.vidPlatform = source.source;
    this.platformId = source.source_data;
    this.urlPresent = true;
  };

  this.queryDetails = function(){
    new Imvdb(this).getVideoDetails(this.id);
  };
}








