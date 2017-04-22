import React, { Component } from 'react';

import { eventRsvpsURI } from '../config/urls';
import apiFetch from '../apiFetch';

import Spinner from './Spinner';

class EventRSVPBtn extends Component {
  state = {
    rsvps: null,
    loading: false,
    error: false,
  };
  constructor(props) {
    super(props);
    this.handleRSVPBtnClickWithYes = this.handleRSVPBtnClick.bind(this, 'yes');
    this.handleRSVPBtnClickWithNo = this.handleRSVPBtnClick.bind(this, 'no');
  }
  componentWillMount() {
    this.fetchData();
  }
  async handleRSVPBtnClick(rsvpResponse, e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    await apiFetch(eventRsvpsURI(this.props.eventId), 'POST', {
      response: rsvpResponse,
    });
    await this.fetchData();
    this.setState({
      loading: false,
    });
  }
  async fetchData() {
    this.setState({
      error: false,
      loading: true,
    });
    const rsvps = await this.getRSVPs();
    if (rsvps == null) {
      this.setState({
        error: true,
        loading: false,
      });
    } else {
      this.setState({
        rsvps,
        loading: false,
      });
    }
  }
  async getRSVPs() {
    return await apiFetch(eventRsvpsURI(this.props.eventId));
  }
  render() {
    const { loading, error, rsvps } = this.state;
    const { me } = this.props;
    let myRSVP = null;
    if (me != null && rsvps != null) {
      myRSVP = rsvps.filter(
        rsvp => rsvp.member.id === me.id
      )[0];
    }
    return (
      <div className="rsvp-btn-group">
        {loading && <Spinner />}
        {!loading &&
          (myRSVP != null && myRSVP.response === 'yes'
            ? <div className="going">
                <button
                  className="secondary"
                  onClick={this.handleRSVPBtnClickWithNo}
                >
                  Say you can't go
                </button>
              </div>
            : <button onClick={this.handleRSVPBtnClickWithYes}>
                Say I'm going
              </button>)}
          {error && <p className="error">Something went wrong with RSVP :(</p>}
      </div>
    );
  }
}

export default EventRSVPBtn;
