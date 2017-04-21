import React, { Component } from 'react';

import Header from './Header';
import EventScreen from './EventScreen';
import HomeScreen from './HomeScreen';
import Footer from './Footer';
import Spinner from './Spinner';

import { mockMe } from '../mocks/me';

class App extends Component {
  state = {
    eventId: null,
  };
  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this);
    this.goToEvent = this.goToEvent.bind(this);
  }
  goToHome() {
    this.setState({
      eventId: null,
    });
  }
  goToEvent(eventId) {
    this.setState({
      eventId,
    });
  }
  render() {
    const { eventId } = this.state;
    return (
      <div>
        <Header me={mockMe} goToHome={this.goToHome} />
        <div className="container">
          {(eventId != null)
            ? <EventScreen eventId={eventId} me={mockMe} />
            : <HomeScreen me={mockMe} goToEvent={this.goToEvent} />}
        </div>
        <Footer />
        <Spinner />
      </div>
    );
  }
}

export default App;
