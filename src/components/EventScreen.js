import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import EventRSVPBtn from './EventRSVPBtn';

const EventScreen = () => (
  <div className="event-detail">
    <h1 className="event-detail__title">Event name</h1>
    <div className="event-detail__info">
      <div className="event-detail__desc">
        <p>Event description</p>
        <p>Another description here</p>
      </div>
      <EventRSVPBtn />
    </div>
    <div class="event-detail__comments">
      <a href="http://meetup.com/blah-blah-blah">
        View on Meetup.com
      </a>
      <CommentBox />
      <CommentList />
    </div>
  </div>
);

export default EventScreen;
