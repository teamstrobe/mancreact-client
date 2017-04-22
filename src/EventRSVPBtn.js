import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EventRSVPBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
      <div className="rsvp-btn-group">
        {!user
          ? <p class="note">
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
  user: PropTypes.any.isRequired,
};
export default EventRSVPBtn;
