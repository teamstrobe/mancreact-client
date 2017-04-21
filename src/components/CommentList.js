import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    return (
      <div>
        <ul className="comments">
          <li>
            This is a comment here
            <div className="comment-name">
              <img
                className="avatar"
                src="http://placehold.it/40"
                alt="John Doe"
              />
              John Doe
            </div>
          </li>
          <li>
            Another comment
            <div className="comment-name">
              <img
                className="avatar"
                src="http://placehold.it/40"
                alt="John Doe"
              />
              John Doe
            </div>
          </li>
        </ul>

      </div>
    );
  }
}

export default CommentList;
