// Following code copied from:
// https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player

// 2. This code loads the IFrame Player API code asynchronously.
function loadYoutube(){
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('vidframe', {
    height: '390',
    width: '640',
    videoId: playlist.shift().youtubeId,
    events: {
      'onReady': function(event){
        event.target.playVideo();
      },
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event){
  if (event.data == YT.PlayerState.ENDED) {
    player.loadVideoById(playlist.shift().youtubeId);
  }
}
