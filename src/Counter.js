import React from 'react';
import './Counter.css';

const Counter = ({ counter, remove }) => {
	// Each Todo
	return (
		<div className="counter">
			<div className="info">
				<div className="label">Counter Name</div>
				<div className="value">{counter.name}</div>

				<div className="label">Total Steps</div>
				<div className="value">{counter.steps}</div>

				<div className="label">Notes</div>
				<div>{counter.notes}</div>
			</div>
			<div className="controls">
				<div className="arrow-control control-up">
					<i className="fas fa-sort-up" />
				</div>
				<div className="current-count">0</div>
				<div className="arrow-control control-down">
					<i className="fas fa-sort-down" />
				</div>
			</div>
			<div
				className="removeBtn"
				onClick={() => {
					remove(counter.id);
				}}
			>
				X
			</div>
		</div>
	);
};

export default Counter;
