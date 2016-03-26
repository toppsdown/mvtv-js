// This sets the stage for the full project
// but I want to get the basics working first

function newLibrary(artistSearch){
  var library = {}

  // get recommended artists for this artist
  // create a new artist object for each
  // that will delegate the async requests to fill out the data
  // someone needs to notify the library to start playing videos, not sure who does that

}

function newArtist(name) {
  var artist = {
    name: name,
    videos: []
  }

  // make request for vid list
  // create a vid object for each
  // need two arrays, 1 for unused vids, and one for used vids for the shuffle
}

function newVideo(imvdbId) {
  // make the request for video information
  // when completed, notify the library to start playing
}








