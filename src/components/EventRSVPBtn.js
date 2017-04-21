import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EventRSVPBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const me = this.props.me;
    return (
      <div className="rsvp-btn-group">
        {!me
          ? <p className="note">
              Please log in to RSVP.
            </p>
          : <button>
              Say I'm going
            </button>}
      </div>
    );
  }
}

EventRSVPBtn.propTypes = {
  me: PropTypes.any.isRequired,
};
export default EventRSVPBtn;
