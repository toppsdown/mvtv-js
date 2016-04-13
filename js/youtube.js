// http://www.w3schools.com/html/html_youtube.asp

// https://developers.google.com/youtube/js_api_reference

function newYoutubeVideo(sourceId) {
  var vidData = {
    sourceId: sourceId,
    embed: function(){
      var vidFrame = document.createElement('iframe');
      vidFrame.width = '420';
      vidFrame.height = '315';
      vidFrame.src = 'http://www.youtube.com/embed/{videoId}?autoplay=1'.supplant({videoId: this.sourceId});

      return vidFrame;
    },
    play: function(){
      window.player.loadVideoById({videoId: this.sourceId});
    },
    embeddable: function(){
      // more efficient to do this as a single query for all videos
      var url = 'https://www.googleapis.com/youtube/v3/videos' + formatParams({part: 'status', id: this.sourceId});
      var handler = function(response) {
        return response.status.embeddable;
      }
      httpGetAsync(url, handler);
    }
  };

  // function onReadyHandler(event) {
  //   event.target.playVideo()
  // }

  return vidData;
}
