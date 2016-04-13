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


function formatParams(params) {
  return '?' + Object
               .keys(params)
               .map(function(key){
                 return key + '=' + params[key];
               }).join('&');
}