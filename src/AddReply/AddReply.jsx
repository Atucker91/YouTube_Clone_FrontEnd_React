import React, { Component } from 'react';

class AddReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment_id: '',
            reply_body: '',
            
            
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postReply(this.state, this.props.comment);
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            <input name="reply_body" onChange={this.handleChange} value={this.state.reply_body} placeholder="Add reply..."/>
            <button type="submit">Reply</button>
            </form>
         );
    }
}
 
export default AddReply;