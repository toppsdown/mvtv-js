
function getArtistInfo(callback){
  var url = 'https://imvdb.com/api/v1/search/videos?q=radiohead';

  var xobj = new XMLHttpRequest();
  xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == 200)
          callback(JSON.parse(xobj.responseText));
  };
  xobj.open('GET', url, true);
  xobj.send(null);
}

function parseArtistResponse(response) {
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

  return simplifiedResponse;
}


function getVideoInfo(vidId, callback){
  var url = 'https://imvdb.com/api/v1/video/' + vidId + '?include=sources';

  var xobj = new XMLHttpRequest();
  xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == 200)
          callback(JSON.parse(xobj.responseText));
  };
  xobj.open('GET', url, true);
  xobj.send(null);
}

function getAllVidInfo(artistObject, callback){
  artistObject.videos.forEach(function(item){
    getVideoInfo(item.id, callback);
  });
}

function parseVideoResponse(response){

  // Check for youtube
  // Select the primary one if it is youtube
  youtubeSource = response.sources.find(function(sourceRecord){
    return sourceRecord.source === 'youtube';
  });

  // TODO: handle case where no youtube sometimes here
  var struct = {};
  struct.id = response.id;
  struct.youtubeId = youtubeSource.source_data;
  struct.artist = response.artists[0].name;
  struct.name = response.song_title;
  return struct;
}

