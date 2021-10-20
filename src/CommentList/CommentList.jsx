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
                            <li> <button onClick={ () => props.updateLike(comment)}>Like</button>  </li>
                            <li> <button onClick={ () => props.updateDislike(comment)}>Dislike</button> </li>
                            <div>
                                <ul>
                                    {props.commentReplies.map((reply) =>
                                    <div>
                                        <div>
                                            <li>{reply.reply_body}</li>
                                        </div>
                                    </div>
                                    )}
                                </ul>
                                
                            </div>
                            
                            <AddReply comment={comment} postReply={props.postReply}/>
                        </div>
                        
                    </div>
                    )}
                </ul>
        </div>
    );
}

export default CommentList;