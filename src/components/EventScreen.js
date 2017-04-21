import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import EventRSVPBtn from './EventRSVPBtn';
import { mockEvents } from '../mocks/events';

const EventScreen = ({ eventId }) => {
  const event = mockEvents[eventId];

  return (
    <div className="event-detail">
      <h1 className="event-detail__title">{event.name}</h1>
      <div className="event-detail__info">
        <div className="event-detail__desc">
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        </div>
        {'upcoming' === event.status && <EventRSVPBtn />}
      </div>
      <div className="event-detail__comments">
        <a href="http://meetup.com/blah-blah-blah">
          View on Meetup.com
        </a>
        <CommentBox />
        <CommentList />
      </div>
    </div>
  );
};

export default EventScreen;
