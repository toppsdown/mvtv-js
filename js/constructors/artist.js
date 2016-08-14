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
    var retVid = this.availableVideos.popRandom();
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
