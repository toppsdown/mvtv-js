
// var testData = [1,2,3,4,5]

// var callbackObject = {
//   data: ,
//   foo: function(){
//     console.log(data)
//   }
// }
var baseUrl = 'https://imvdb.com/api/v1';

var url = 'https://imvdb.com/api/v1/search/videos?q=pinback'
function callback(response){
  self = callback
  self.artistVidList = []

  var internalCallback = function(response) {
    var video = {
      id: response.id,
      title: response.song_title,
      artist: response.artists[0].name,      
      url: response.sources[0].source_data
    }
    
    self.artistVidList.push(video)
  }

  response.results.map(function(result){
    var url = [baseUrl, 'video', result.id].join('/') + formatParams({'include': 'sources'});
    httpGetAsync(url, internalCallback)
  });
}

httpGetAsync(url, callback)