function newVideo(sourceData) {
  switch(sourceData.source) {
    case 'youtube':
      return newYoutubeVideo(sourceData.source_data);
    default:
      console.log('Unexpected video source ' + sourceSite);
      return null;
  }
}