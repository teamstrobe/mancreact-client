import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import EventRSVPBtn from './EventRSVPBtn';
import { mockEvents } from './../mocks/events';

const EventScreen = props => {
  const eventid = props.eventId;
  const event = mockEvents[eventid];
  return (
    <div className="event-detail">
      <h1 className="event-detail__title">Event name</h1>
      <div className="event-detail__info">
        <div className="event-detail__desc">
          <p>{event.name}</p>
          <p>{event.description} here</p>
        </div>
        {event.status === 'upcoming' && <EventRSVPBtn me={props.me} />}

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
