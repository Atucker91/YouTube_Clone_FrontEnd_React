import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResultsList from './SearchResultsList/SearchResultsList';
import VideoPlayer from './VideoPlayer/VideoPlayer';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedVideo: [],
      videoSearchResults: [],
      allComments: [],
      replies: []
     }
  }

  componentDidMount(){

  }

  setSelectedVideo = async (video) => {
    this.setState({
      selectedVideo: video
    })
    console.log(this.state.selectedVideo)
  }

  getSearchResults = async (searchInput) => {
    let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchInput}&key=AIzaSyAOyG4Z4cTTK9TQEELOis9CYRdWmDSjq-0&maxResults=10&part=snippet`);
    this.setState({
      videoSearchResults: response.data.items
    })
    console.log(this.state.videoSearchResults)
  }



  render() { 
    return ( 
      <div className='row'>
        <div className='col-xl-8'>
          <SearchBar handleSearchSubmit={this.getSearchResults}/>
          <VideoPlayer selectedVideo={this.state.selectedVideo} />
        </div>
        <div className='col-xl-4'>
          <SearchResultsList  videoSearchResults={this.state.videoSearchResults} setSelectedVideo={this.setSelectedVideo}/>
        </div>
      </div>
     );
  }
}
 
export default App;
