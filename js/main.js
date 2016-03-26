document.getElementById('submit_search').addEventListener('click', submitSearch, false);

var apiKey = 'YkSfkAE6iqCb2NCzhzKMtKYevSh2XtEWNwb77Qeq' ;
var baseUrl = 'https://imvdb.com/api/v1';

function submitSearch() {
	var artist = document.getElementById('artist_search').value;
	searchImvdb(artist);
	// searchImvdb('pinback');
}
