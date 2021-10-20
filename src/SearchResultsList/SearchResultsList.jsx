import React from 'react';

const SearchResultsList = (props) => {
    console.log(props.videoSearchResults)
    return ( 
        
                             <ul>           
                                {props.videoSearchResults.map(video =>
                                    <div onClick={ () => {props.setSelectedVideo(video); props.listComments(video);}}>
                                        <li><img src={video.snippet.thumbnails.medium.url} alt=""/></li>
                                    </div>
                                )}
                            </ul>
                        
     );
}

export default SearchResultsList;