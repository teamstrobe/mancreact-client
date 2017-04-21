import React from 'react';

const UpcomingEventHero = props => {
  const heroStyles = {
    backgroundImage: 'url(https://pbs.twimg.com/profile_banners/14314572/1462486903/1500x500)',
  };
  return (
    <article className="upcoming" style={heroStyles}>
      <h1>
        <a href="/event.html">
          {props.mainTitle}
          {' '}
          <span className="upcoming-title-sub">{props.subTitle}</span>
        </a>
      </h1>
      <h2 className="upcoming-by">{props.narrator}</h2>
      <div className="upcoming-date">{props.comingDate}</div>
      <div>
        <p>Description here</p>
        <p>Another paragraph</p>
      </div>
    </article>
  );
};
