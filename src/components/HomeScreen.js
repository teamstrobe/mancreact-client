import React from 'react';
import UpcomingEventHero from './UpcomingEventHero';
import PreviousMeetupsList from './PreviousMeetupsList';
import { mockEventsList } from '../mocks/events';

const HomeScreen = () => {
  const events = mockEventsList;
  let upcomingEvent;
  let previousEvents;
  if (events != null) {
    upcomingEvent = events.filter(event => event.status === 'upcoming')[0];
    previousEvents = events.filter(event => event.status === 'past');
  }
  return (
    <div>
      <UpcomingEventHero event={upcomingEvent} />
      <PreviousMeetupsList events={previousEvents} />
    </div>
  );
};

export default HomeScreen;
