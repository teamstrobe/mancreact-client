import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    commentText: '',
  };

  updateText = event => {
    this.setState({ commentText: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ commentText: '' });
  };

  render() {
    // This will become this.props.me when the
    // parent is ready to pass this prop.
    const me = {};

    return (
      <form>
        {me
          ? <div>
              <textarea
                className="comment-box"
                placeholder="Chat about this event"
                value={this.state.commentText}
                onChange={this.updateText}
              />
              <button onClick={this.onSubmit}>Send</button>
            </div>
          : <p className="note">Please log in to comment.</p>}
      </form>
    );
  }
}

export default CommentBox;
