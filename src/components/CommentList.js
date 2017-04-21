import React from 'react';
import { mockComments } from '../mocks/comments';

const CommentList = () => {
  const comments = mockComments;
  return (
    <div>
      {comments.length > 0
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
          </p>}
    </div>
  );
};

export default CommentList;
