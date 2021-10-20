import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResultsList from './SearchResultsList/SearchResultsList';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import AddComment from './AddComment/AddComment';
import CommentList from './CommentList/CommentList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedVideo: [],
      videoSearchResults: [],
      allComments: [],
      videoComments: [],
      replies: [],
      commentReplies: []
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

  postComment = async (comment, video) => {
    
    try{
      console.log('Succes create comment in API call')
      comment.videoid = video.id.videoId;
      let response = await axios.post('http://127.0.0.1:8000/YouTube_API/', comment);
      let tempComment = this.state.allComments;
      tempComment.push(response.data);
      this.setState({
        allComments: tempComment

      })
      this.listComments(video)
    }
    catch (ex) {
      console.log('Error in create comment API call', ex)
    }
  }

  listComments = async (video) => {
    let response = await axios.get('http://127.0.0.1:8000/YouTube_API/' + video.id.videoId + '/');
        this.setState({
            videoComments: response.data
        });
  }

  postReply = async (reply, comment) => {
    
    try{
      console.log('Succes create reply in API call')
      reply.comment_id = comment.id;
      let response = await axios.post('http://127.0.0.1:8000/YouTube_API/reply/', reply);
      let tempReplies = this.state.replies;
      tempReplies.push(response.data);
      this.setState({
        replies: tempReplies

      })
      
    }
    catch (ex) {
      console.log('Error in create reply API call', ex)
    }
  }

  listReplies = async (comment) => {
    let response = await axios.get('http://127.0.0.1:8000/YouTube_API/reply/' + comment.id + '/');
        this.setState({
            commentReplies: response.data
        });
  }

  updateLike = async (comment) => {
    console.log(this.state.videoComments)
    comment.like++
    this.setState({
      videoComments: this.state.videoComments
    })
  }

  updateDislike = async (comment) => {
    comment.dislike++
  }



  render() { 
    return ( 
      <div className='row'>
        <div className='col-xl-8'>
          <SearchBar handleSearchSubmit={this.getSearchResults} />
          <VideoPlayer selectedVideo={this.state.selectedVideo} />
          <AddComment postComment={this.postComment} selectedVideo={this.state.selectedVideo} />
          <CommentList videoComments={this.state.videoComments} postReply={this.postReply} commentReplies={this.state.commentReplies} updateLike={this.updateLike} updateDislike={this.updateDislike}/>
        </div>
        <div className='col-xl-4'>
          <SearchResultsList  videoSearchResults={this.state.videoSearchResults} setSelectedVideo={this.setSelectedVideo} listComments={this.listComments}/>
        </div>
      </div>
     );
  }
}
 
export default App;
