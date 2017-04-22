import React, { Component } from 'react';

import { eventCommentsURI } from '../config/urls';
import apiFetch from '../apiFetch';

import Spinner from './Spinner';

class CommentBox extends Component {
  state = {
    commentText: '',
    loading: false,
  };
  constructor(props) {
    super(props);
    this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this);
    this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
  }
  async handleCommentFormSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    // You may want to switch this.props.eventId for a hardcoded but real eventID, as the parent
    // component will be still be returning a mocked event ID
    await apiFetch(eventCommentsURI(this.props.eventId), 'POST', {
      comment: this.state.commentText,
    });
    this.setState({
      commentText: '',
      loading: false,
    });
    if (typeof this.props.onCommentAdd === 'function') {
      this.props.onCommentAdd(this.state.commentText);
    }
  }
  handleCommentTextChange(e) {
    this.setState({
      commentText: e.currentTarget.value,
    });
  }
  render() {
    const { loading } = this.state;
    return (
      <form onSubmit={this.handleCommentFormSubmit}>
        {this.props.me
          ? <div>
              <textarea
                value={this.state.commentText}
                onChange={this.handleCommentTextChange}
                className="comment-box"
                placeholder="Chat about this event"
              />
              {loading ? <Spinner /> : <button type="submit">Send</button>}
            </div>
          : <p class="note">Please log in to comment.</p>}
      </form>
    );
  }
}

export default CommentBox;
