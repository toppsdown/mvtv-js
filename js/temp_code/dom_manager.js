
// Public
function displayVideos(artistObject){
  var body = document.getElementsByTagName('body')[0];
  artistSection = buildArtistSection(artistObject);
  body.appendChild(artistSection);
}

function updatePlaylist(currentPlaylist){
  currentPlaylist.forEach(function(item){
    document.getElementById('vidlist');
    appendToList(videoList, item);
  });
}


// Private
function generateListItem(item){
  var newItem = document.createElement('li');
  var itemTextNode = document.createTextNode(displayVidInfo(item));
  newItem.id = item.id;
  newItem.appendChild(itemTextNode);

  return newItem;
}

function appendToList(list, item){
  var newItem = generateListItem(item);
  list.appendChild(newItem);
}

function buildHeader(artistName){
  var header = document.createElement('h1');
  var headerText = document.createTextNode(artistName);
  header.appendChild(headerText);
  return header;
}

function displayVidInfo(vidInfo){
  return [vidInfo.id, vidInfo.name].join(' - ');
}

function buildArtistSection(artistObject){
  var artistSection = document.createElement('div');
  artistSection.id = 'vidlist';

  header = buildHeader(artistObject.artistName);
  artistSection.appendChild(header);

  var videoList = document.createElement('ul');
  artistSection.appendChild(videoList);

  artistObject.videos.forEach(function(item){
    appendToList(videoList, item);
  });

  return artistSection;
}

