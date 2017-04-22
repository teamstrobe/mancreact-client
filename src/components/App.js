import React, { Component } from 'react';
import ls from 'local-storage';
import qs from 'query-string';

import Header from './Header';
import EventScreen from './EventScreen';
import HomeScreen from './HomeScreen';
import Footer from './Footer';

import { Router, Route } from 'react-router-dom';
import browserHistory from '../browserHistory';
import apiFetch from '../apiFetch';
import { selfURI } from '../config/urls';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  state = {
    accessToken: null,
    me: null,
  };
  componentWillMount() {
    this.checkAuthorisation(() => {
      this.fetchMe(this.state.accessToken);
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { accessToken } = this.state;
    if (accessToken && prevState.accessToken !== accessToken) {
      this.fetchMe();
    }
  }
  checkAuthorisation(cb = () => null) {
    let accessToken = ls('access_token');
    if (window.location.hash) {
      accessToken = qs.parse(window.location.hash.slice(1)).access_token;
      ls('access_token', accessToken);
      browserHistory.push({
        ...this.props.location,
        hash: null,
      });
      this.setState({ accessToken }, () => cb());
    } else if (ls('access_token')) {
      this.setState({ accessToken }, () => cb());
    }
  }
  async fetchMe() {
    const me = await apiFetch(selfURI());
    if (me != null) {
      this.setState({
        me,
      });
    } else {
      this.logout();
    }
  }
  handleLogoutClick() {
    this.logout();
  }
  handleLoginClick() {
    this.login();
  }
  logout() {
    ls('accessToken', null);
    this.setState({
      accessToken: null,
      me: null,
    });
  }
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <Header me={this.state.me} onLogoutClick={this.handleLogoutClick} />
          <div className="container">
            <Route
              path="/events/:eventId"
              exact
              render={props => (
                <EventScreen
                  eventId={props.match.params.eventId}
                  me={this.state.me}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={props => <HomeScreen me={this.state.me} />}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
