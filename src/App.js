import React, {Component} from 'react';
import EventRSVPBtn from './EventRSVPBtn';
import Header from './Header';
import HomeScreen from './HomeScreen';
import EventScreen from './EventScreen';
import Footer from './Footer';

const App = () => (
  <div>
    <div className="container">
      <Header />
      {window.location.search.includes('event')
        ? <EventScreen />
        : <HomeScreen />}
      <Footer />
    </div>
  </div>
);

export default App;
