import React, {Component} from 'react';

const PreviousMeetupsList = () => (

	<section>
	  <h2 className="label prev-list-title">Previous meetups</h2>
	  <div className="prev-list-group">
		<div className="prev-list-group__item">
		  <h3>2017</h3>
		  <ul className="prev-list">
			<li>
			  <a href="?event=1">
				April
			  </a>
			</li>
			<li>
			  <a href="?event=1">
				May
			  </a>
			</li>
		  </ul>
		</div>
		<div className="prev-list-group__item">
		  <h3>2016</h3>
		  <ul className="prev-list">
			<li>
			  <a href="?event=1">
				April
			  </a>
			</li>
			<li>
			  <a href="?event=1">
				May
			  </a>
			</li>
		  </ul>
		</div>
	  </div>
	</section>

);

export default PreviousMeetupsList;
