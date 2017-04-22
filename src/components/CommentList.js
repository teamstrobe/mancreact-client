import React, { Component } from 'react';

import apiFetch from '../apiFetch';
import { eventCommentsURI, commentsStreamURL } from '../config/urls';

import Spinner from './Spinner';

class CommentList extends Component {
  state = {
    comments: [],
    error: false,
    loading: false,
  };
  componentWillMount() {
    this.openCommentsWS();
    this.fetchData();
  }
  componentDidUpdate(nextProps) {
    if (this.props.eventId !== nextProps.eventId) {
      this.fetchData();
      this.restartCommentsWS();
    }
  }
  async getComments() {
    return await apiFetch(eventCommentsURI(this.props.eventId));
  }
  async fetchData() {
    this.setState({
      error: false,
      loading: true,
    });
    const [comments] = await Promise.all([this.getComments()]);
    if (comments == null) {
      this.setState({
        error: true,
        loading: false,
      });
    } else {
      this.setState({
        comments,
        loading: false,
      });
    }
  }
  restartCommentsWS() {
    if (this.commentsWS) {
      this.commentsWS.onclose = () => {
        this.openCommentsWS();
      };
      this.commentsWS.close();
    } else {
      this.openCommentsWS();
    }
  }
  openCommentsWS() {
    this.commentsWS = new WebSocket(commentsStreamURL(this.props.eventId));
    this.commentsWS.onmessage = e => {
      const comment = JSON.parse(e.data);
      if (comment.errors && comment.errors.length) {
        this.setState({
          error: true,
          loading: false,
        });
        console.error(comment.errors);
        this.commentsWS.close();
        return;
      }
      // We have to reshape the comment object, to match the v3 Meetup API
      // (Stream API is still on v2)
      this.setState(state => ({
        comments: [
          {
            ...comment,
            member: {
              name: comment.member.member_name,
              photo: {
                thumb_link: comment.member.photo,
              },
            },
          },
        ].concat(state.comments),
      }));
    };
  }
  render() {
    const { comments, loading, error } = this.state;
    let body = null;
    if (loading) {
      body = <Spinner />;
    } else if (error) {
      body = <p className="error">Comments could not be loaded :(</p>
    } else {
      body = comments.length > 0
        ? <ul className="comments">
            {comments.map(comment => (
              <li key={comment.id}>
                {comment.comment}
                <div className="comment-name">
                  <img
                    className="avatar"
                    src={comment.member.photo.thumb_link}
                    alt={comment.member.name}
                  />
                  {comment.member.name}
                </div>
              </li>
            ))}
          </ul>
        : <p className="note">
            There are no comments yet. Be the first :)
          </p>;
    }
    return (
      <div>
        {body}
      </div>
    );
  }
}

export default CommentList;
