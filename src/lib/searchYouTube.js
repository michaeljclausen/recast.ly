var searchYouTube = (options, callback) => {
  $.ajax({
    success: (data) => {
      callback(data);
    },
    data: options,
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search'
  });
};

window.searchYouTube = searchYouTube;
