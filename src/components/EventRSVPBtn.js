import React from 'react';

const EventRSVPBtn = ({ me }) => (
  <div className="rsvp-btn-group">
    {me
      ? <button>
          Say I'm going
        </button>
      : <p className="note">
          Please log in to RSVP.
        </p>}
  </div>
);

export default EventRSVPBtn;
