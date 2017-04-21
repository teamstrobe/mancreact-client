import React, { Component } from 'react';
import { mockComments } from './../mocks/comments';

class CommentList extends Component {
  render() {
    const comments = mockComments;
    return (
      <div>
        <ul className="comments">
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                {comment.comment}
                <div className="comment-name">
                  <img
                    className="avatar"
                    src={comment.member.photo.thumb_link}
                    alt="{comment.member.name}"
                  />
                  {comment.member.name}
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default CommentList;
