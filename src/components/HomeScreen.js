import React, { Component } from 'react';
// import UpcomingEventHero from './UpcomingEventHero';
import PreviousMeetupsList from './PreviousMeetupsList';
import { mockEventsList } from '../mocks/events';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        events: mockEventsList,
      });
      this.addAnother();
    }, 1000);
  }

  addAnother() {
    let newEvents = this.state.events;
    let newfakeEvent = Object.assign({}, newEvents[newEvents.length - 1]);
    newfakeEvent.id = newEvents.length + 1;
    newfakeEvent.time = newfakeEvent.time + 1000 * 60 * 60 * 24 * 70;
    console.log(newfakeEvent.time);
    newEvents.push(newfakeEvent);
    this.setState({
      events: newEvents,
    });
    console.log('Anther');
    setTimeout(() => {
      this.addAnother();
    }, 1000);
  }

  render() {
    // let upcomingEvent;
    let previousEvents;
    if (this.state.events != null) {
      // upcomingEvent = this.state.events.filter(event => event.status === 'upcoming')[0];
      previousEvents = this.state.events.filter(
        event => event.status === 'past'
      );
    }
    return (
      <div>
        {/* <UpcomingEventHero /> */}
        <PreviousMeetupsList events={previousEvents} />
      </div>
    );
  }
}
export default HomeScreen;
