var baseUrl = 'https://imvdb.com/api/v1';

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
    response.sources.map(function(source){
      var vid = newVideo(source);
      if (vid.embeddable()) {
        playlist.push(vid);
      }
    });
  };

  httpGetAsync(url, handleVidResponse);
}