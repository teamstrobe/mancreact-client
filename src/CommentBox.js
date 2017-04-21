import React, { Component } from 'react';

const CommentBox = () => (
  <form>
    {/* if they're not logged in 
            <p className="note">Please log in to comment.</p>
        */}
    <div>
      <textarea className="comment-box" placeholder="Chat about this event" />
      <button type="submit">Send</button>
    </div>
  </form>
);

export default CommentBox;
