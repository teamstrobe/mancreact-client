import React, { Component } from 'react';

import { eventURI } from '../config/urls';
import apiFetch from '../apiFetch';
import { MANCREACT_URL_NAME } from '../config/constants';

import EventRSVPBtn from './EventRSVPBtn';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import Spinner from './Spinner';

class EventScreen extends Component {
  state = {
    event: null,
  };
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
  }
  componentWillMount() {
    this.fetchData();
  }
  componentWillUnmount() {
    if (this.timeout != null) {
      clearTimeout(this.timeout);
    }
  }
  async fetchData() {
    this.setState({
      error: false,
      loading: true,
    });
    const event = await this.getEvent();
    if (event == null) {
      this.setState({
        error: true,
        loading: false,
      });
    } else {
      this.setState({
        event,
        loading: false,
      });
    }
  }
  async getEvent() {
    const { eventId } = this.props;
    return await apiFetch(eventURI(eventId));
  }
  handleAddComment(commentText) {
    if (this.commentList && typeof this.commentList.addComment === 'function') {
      this.commentList.addComment(commentText);
    }
  }
  render() {
    const { eventId, me } = this.props;
    const { event, error, loading } = this.state;
    let body = null;
    if (error) {
      body = <p className="error">Oops, this event could not be loaded :(</p>;
    } else if (event != null) {
      body = (
        <div className="event-detail">
          <h1 className="event-detail__title">{event.name}</h1>
          <div className="event-detail__info">
            <div
              className="event-detail__desc"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />

            {event.status === 'upcoming' &&
              <EventRSVPBtn me={me} eventId={eventId} />}

          </div>
          <div className="event-detail__comments">
            <a
              href={
                `https://meetup.com/${MANCREACT_URL_NAME}/events/${event.id}`
              }
            >
              View on Meetup.com
            </a>

            <CommentBox
              eventId={eventId}
              me={me}
              onCommentAdd={this.handleAddComment}
            />

            <CommentList
              eventId={eventId}
              ref={c => {
                this.commentList = c;
              }}
            />

          </div>
        </div>
      );
    } else if (loading === true) {
      body = <Spinner />;
    }
    return (
      <div>
        {body}
      </div>
    );
  }
}

export default EventScreen;
