import React, { Component } from 'react';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment_body: '',
            videoid: '',
            like: 0,
            dislike: 0, 
            
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postComment(this.state, this.props.selectedVideo)
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            <input name="comment_body" onChange={this.handleChange} value={this.state.comment_body} placeholder="Add a public comment..."/>
            <button type="submit">Comment</button>
            </form>
         );
    }
}
 
export default AddComment;
