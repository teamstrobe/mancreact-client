import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { getEventDescriptions } from '../utilities/event';

const UpcomingEventHero = ({ event }) => {
  const { mainTitle, subTitle, byline, description } = getEventDescriptions(
    event
  );
  const date = moment(event.time);
  return (
    <article
      className="upcoming"
      style={{
        backgroundImage: 'url(https://pbs.twimg.com/profile_banners/14314572/1462486903/1500x500)',
      }}
    >
      <h1>
        <Link to={`/events/${event.id}`}>
          {mainTitle}
          {subTitle &&
            <span>
              :
              {' '}
              <span className="upcoming-title-sub">
                {subTitle}
              </span>
            </span>}
        </Link>
      </h1>
      <h2 className="upcoming-by">{byline}</h2>
      <div className="upcoming-date">{date.format('MMMM Do YYYY')}</div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  );
};

export default UpcomingEventHero;
