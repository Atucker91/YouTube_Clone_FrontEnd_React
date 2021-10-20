import React from 'react';
import AddReply from '../AddReply/AddReply';

const CommentList = (props) => {

    console.log(props.videoComments)

    return ( 
        <div>
                <ul>
                    {props.videoComments.map((comment) =>
                    <div>
                        <div>
                            <li> {comment.comment_body} Likes:{comment.like} Dislikes:{comment.dislike} </li>
                            <AddReply comment={comment} postReply={props.postReply}/>
                        </div>
                        
                    </div>
                    )}
                </ul>
        </div>
    );
}

export default CommentList;