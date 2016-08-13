function DomManager(){
  this.vidList = document.getElementById('vid_list');

  this.appendToVidList = function(vidId){
    var vidItem = document.createElement('li');
    vidItem.appendChild(document.createTextNode(vidId));
    this.vidList.appendChild(vidItem);
  };

  this.searchButton = document.getElementById('submit_search');
}
