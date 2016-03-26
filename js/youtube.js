// http://www.w3schools.com/html/html_youtube.asp

function newYoutubeVideo(sourceId) {
  var vidData = {
    sourceId: sourceId,
    embed: function(){
      var vidFrame = document.createElement('iframe');
      vidFrame.width = '420';
      vidFrame.height = '315';
      vidFrame.src = 'http://www.youtube.com/embed/{videoId}?autoplay=1'.supplant({videoId: this.sourceId});

      return vidFrame;
    }
  };

  return vidData;
}
