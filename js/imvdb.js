function searchImvdb(artist) {
  var url = [baseUrl, 'search', 'videos'].join('/') + formatParams({q: artist});

  var handleArtistSearchResponse = function(response) {
    var vid_ids = response.results.map(function(result){
      getVidsForId(result.id);
    });
  };

  httpGetAsync(url, handleArtistSearchResponse);
}

function getVidsForId(id) {
  var url = [baseUrl, 'video', id].join('/') + formatParams({'include': 'sources'});

  var handleVidResponse = function(response){
    var list = document.getElementById('vid_list');

    response.sources.map(function(source){
      var vidEntry = document.createElement('li');
      vidEntry.appendChild(document.createTextNode(response.song_title + ' ' + formatVidSource(source)));
      list.appendChild(vidEntry);
    });
  };

  httpGetAsync(url, handleVidResponse);
}


function formatVidSource(source){
  var youtubeUrlBase = 'https://www.youtube.com/watch?v=';
  var vimeoUrlBase = 'https://vimeo.com/';
  var sourceSite = source.source;

  var urlBase = function(){
    switch(sourceSite) {
      case 'youtube':
        return youtubeUrlBase;
      case 'vimeo':
        return vimeoUrlBase;
      default:
        console.log('Unexpected video source ' + sourceSite);
        return null;
    }
  }();

  if (urlBase) {
    return urlBase + source.source_data;
  }
}