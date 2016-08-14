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
