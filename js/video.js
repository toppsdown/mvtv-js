var VIDWIDTH = '420';
var VIDHEIGHT = '315';


function Video(sourceData) {
  switch(sourceData.source) {
    case 'youtube':
      return newYoutubeVideo(sourceData.source_data);
    default:
      console.log('Unexpected video source ' + sourceSite);
      return null;
  }
}
