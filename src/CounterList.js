import React from 'react';
import Counter from './Counter.js'
import './CounterList.css'

const CounterList = ({ counters, remove }) => {
	let allCounters = [];
    console.log(counters);
    if (counters.length > 0) {
        allCounters = counters.map(counter => {
            return <Counter key={counter.id} counter={counter} remove={remove} />;
        });
        return (
			<div id="list">
				<p id="info"> Your Counters: </p>
				{allCounters}
			</div>
		);
    }
    return (
        <div key="-1" id="empty-list-banner">
            You have no counters, start one!
        </div>
    );
};

export default CounterList;
