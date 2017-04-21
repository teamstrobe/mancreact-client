import React, { Component } from 'react';

const CommentBox = ({ me }) => (
  <form>
    {me
      ? <div>
          <textarea
            className="comment-box"
            placeholder="Chat about this event"
          />
          <button type="submit">Send</button>
        </div>
      : <p className="note">Please log in to comment.</p>}
  </form>
);

export default CommentBox;
