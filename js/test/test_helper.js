// Load fixtures
function loadJSON(file){
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, false); // Replace 'my_data' with the path to your file
  xobj.send(null);
  return JSON.parse(xobj.responseText);
}
