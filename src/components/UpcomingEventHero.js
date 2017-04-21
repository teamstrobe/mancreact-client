import React from 'react';

const UpcomingEventHero = props => {
  const heroStyles = {
    backgroundImage: 'url(https://pbs.twimg.com/profile_banners/14314572/1462486903/1500x500)',
  };
  // console.log(upcomingEvent);
  return (
    <article className="upcoming" style={heroStyles}>
      <h1>
        <a href="/event.html">
          {props.mainTitle}
          {' '}
          <span className="upcoming-title-sub">Sub-title</span>
        </a>
      </h1>
      <h2 className="upcoming-by">{props.narrator}</h2>
      <div className="upcoming-date">{props.date}</div>
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
    </article>
  );
};

export default UpcomingEventHero;
