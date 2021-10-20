import React from 'react';


const VideoPlayer = (props) => {
    console.log(props.selectedVideo)
    if (!props.selectedVideo || props.selectedVideo.length < 1) {
        return <div>
           
           <p>
           No Video Selected yet
           </p>
        </div>;
      }
    
    const videoLink = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
    const videoTitle = `${props.selectedVideo.snippet.title}`
    const videoDescription = `${props.selectedVideo.snippet.description}`


    return ( 
        <div>
            <iframe title={videoTitle} src={videoLink} />
            <h3>{videoTitle}</h3>
            <h4>{videoDescription}</h4>
        </div>
    )
}
 
export default VideoPlayer;