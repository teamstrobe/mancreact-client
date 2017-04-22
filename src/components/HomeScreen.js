import React, { Component } from 'react';

import apiFetch from '../apiFetch';
import { eventsURI } from '../config/urls';

import UpcomingEventHero from './UpcomingEventHero';
import PreviousMeetupsList from './PreviousMeetupsList';
import Spinner from './Spinner';

class HomeScreen extends Component {
  state = {
    events: null,
    loading: false,
  };
  componentWillMount() {
    this.fetchData();
  }
  async fetchData() {
    this.setState({
      loading: true,
    });
    const events = await this.getEvents();
    this.setState({
      events,
      loading: false,
    });
  }
  async getEvents() {
    return await apiFetch(eventsURI());
  }
  render() {
    const { events, loading } = this.state;
    let upcomingEvent;
    let previousEvents;
    if (events != null) {
      upcomingEvent = events.filter(event => event.status === 'upcoming')[0];
      previousEvents = events.filter(event => event.status === 'past');
    }
    return (
      <div>
        {loading
          ? <Spinner />
          : <div>
              {upcomingEvent && <UpcomingEventHero event={upcomingEvent} />}
              {previousEvents &&
                <PreviousMeetupsList events={previousEvents} />}
            </div>}
      </div>
    );
  }
}

export default HomeScreen;
