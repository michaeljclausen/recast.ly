class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {video: window.exampleVideoData[0], videos: window.exampleVideoData };
  }
  
  handleSearchClick(query) {
    this.setState({query : query});
    
    searchYouTube({
      q: query,
      max: 8,
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: 'true',
      part: 'snippet',
      type: 'video'
    }, (data) => {
      this.setState({videos: data.items, video: data.items[0]});
    });
  }
    
  handleVideoClick(video) {
    this.setState({video: video });
  }
  
  render() {
    return (
      <div>
        <Nav clickHandler={this.handleSearchClick.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} clickHandler={this.handleVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
