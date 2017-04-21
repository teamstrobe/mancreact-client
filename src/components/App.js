import React from 'react';
import { mockMe } from '../mocks/me';
import queryString from 'query-string';

import Header from './Header';
import HomeScreen from './HomeScreen';
import EventScreen from './EventScreen';
import Footer from './Footer';
import Spinner from './Spinner';

const App = () => {
  const params = queryString.parse(window.location.search.substr(1));
  return (
    <div>
      <div className="container">
        <Header me={mockMe} />
        {params && params.event
          ? <EventScreen eventId={params.event} me={mockMe} />
          : <HomeScreen me={mockMe} />}
        <Footer />
        <Spinner />
      </div>
    </div>
  );
};

export default App;
