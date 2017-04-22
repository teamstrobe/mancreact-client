import React from 'react';
import { Link } from 'react-router-dom';
import { groupBy } from 'lodash';
import moment from 'moment';

const PreviousMeetupsList = ({ events }) => {
  const eventsByYear = groupBy(events, event =>
    moment(event.time).format('YYYY'));
  const sortedYears = Object.keys(eventsByYear).sort().reverse();
  return (
    <section>
      <h2 className="label prev-list-title">Previous meetups</h2>
      <div className="prev-list-group">
        {sortedYears.map(year => {
          const events = eventsByYear[year];
          return (
            <div key={year} className="prev-list-group__item">
              <h3>{year}</h3>
              <ul className="prev-list">
                {events.map(event => {
                  const month = moment(event.time).format('MMMM');
                  return (
                    <li key={event.id}>
                      <Link to={`/events/${event.id}`}>
                        {month}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PreviousMeetupsList;
