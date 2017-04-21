import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import Spinner from './Spinner';
import EventRSVPBtn from './EventRSVPBtn';
import { mockEvents } from '../mocks/events';

class EventScreen extends React.Component {
  state = { event: null };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ event: mockEvents[this.props.eventId] });
    }, 500);
  }
  render() {
    const { me, eventId } = this.props;
    const event = this.state.event;
    return event
      ? <div className="event-detail">
          <h1 className="event-detail__title">{event.name}</h1>
          <div className="event-detail__info">
            <div className="event-detail__desc">
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>
            {'upcoming' === event.status && <EventRSVPBtn me={me} />}
          </div>
          <div className="event-detail__comments">
            <a href="http://meetup.com/blah-blah-blah">
              View on Meetup.com
            </a>
            <CommentBox />
            <CommentList />
          </div>
        </div>
      : <Spinner />;
  }
}

export default EventScreen;
