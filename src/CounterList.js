import React from 'react';
import Counter from './Counter.js'
import './CounterList.css'

const CounterList = ({ counters, remove, addOne, subtractOne, infoChanged }) => {
	let allCounters = [];
    if (counters.length > 0) {
        allCounters = counters.map(counter => {
            return <Counter key={counter.id} counter={counter} remove={remove} addOne={addOne} subtractOne={subtractOne} infoChanged={infoChanged} />;
        });
        return (
			<div className="counters-list">
				{allCounters}
			</div>
		);
    }
    return (
        <div key="-1" className="empty-list-banner">
            You have no counters, start one!
        </div>
    );
};

export default CounterList;
