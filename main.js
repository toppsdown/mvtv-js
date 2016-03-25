document.getElementById('submit_search').addEventListener('click', submitSearch, false);

var apiKey = 'YkSfkAE6iqCb2NCzhzKMtKYevSh2XtEWNwb77Qeq' ;
var baseUrl = 'https://imvdb.com/api/v1';

function submitSearch() {
	var artist = document.getElementById('artist_search').value;
	searchImvdb(artist)
	// searchImvdb('pinback');
}


function searchImvdb(artist) {
	var url = [baseUrl, 'search', 'videos'].join('/') + formatParams({q: artist});
	httpGetAsync(url, handleArtistSearchResponse);
}

function formatParams(params) {
  return '?' + Object
               .keys(params)
               .map(function(key){
                 return key + '=' + params[key];
               });
}

function handleArtistSearchResponse(response) {
  var vid_ids = response.results.map(function(result){
    getVidsForId(result.id);
  });
}

function getVidsForId(id) {
  var url = [baseUrl, 'video', id].join('/') + formatParams({'include': 'sources'});
  httpGetAsync(url, handleVidResponse);
}

function handleVidResponse(response){
  var list = document.getElementById('vid_list');

  response.sources.map(function(source){
    var vidEntry = document.createElement('li');
    vidEntry.appendChild(document.createTextNode(response.song_title + ' ' + formatVidSource(source)));
    list.appendChild(vidEntry);
  });
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

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
function httpGetAsync(theUrl, callback) {
  console.log('Getting ' + theUrl);
  var xmlHttp = new XMLHttpRequest();
  // function called event that gets called when request comes back
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(JSON.parse(xmlHttp.responseText));
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  // xmlHttp.setRequestHeader('IMVDB-APP-KEY', apiKey);  
  xmlHttp.send();
}

