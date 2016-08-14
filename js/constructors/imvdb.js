

function Imvdb(storageObject){
  var baseUrl = 'https://imvdb.com/api/v1';

  this.queryVideos = function(query){
    var artistSearchUrl = [baseUrl, 'search', 'videos'].join('/') + formatParams({q: query});
    var response;

    httpGetAsync(artistSearchUrl, this.parseSearchQueryResponse);
  };

  this.parseSearchQueryResponse = function(response){
    storageObject.parseResponse(response);
  };

  this.getVideoDetails = function(id){
    var url = [baseUrl, 'video', id].join('/') + formatParams({'include': 'sources'});

    httpGetAsync(url, this.parseVideoDetailsResponse);
  };

  this.parseVideoDetailsResponse = function(response){
    storageObject.parseResponse(response);
  };
};


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
      playlist.push(newVideo(source));
    });
  };

  httpGetAsync(url, handleVidResponse);
}
