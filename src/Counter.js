import React from 'react';

const Counter = ({counter, remove}) => {
  // Each Todo
  return (
		<div className="counter">
			<div>{counter.name}</div>
			<div>{counter.steps}</div>
      <div>{counter.notes}</div>
			<span
				className="removeBtn"
				onClick={() => {
					remove(counter.id);
				}}
			>
				X
			</span>
		</div>
  );
}

export default Counter;