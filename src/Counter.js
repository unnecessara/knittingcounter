import React from 'react';
import './Counter.css';

const Counter = ({ counter, remove, addOne, subtractOne, infoChanged }) => {

	
	const handleInfoChanged = (event) => {
		infoChanged(counter.id, event.target.name, event.target.value);
	};

	return (
		<div className="counter">
			<div className="info">
				<input
					type="text"
					name="name"
					className="question"
					id="nme"
					required
					autoComplete="off"
					value={counter.name}
					onChange={handleInfoChanged}
				/>
				<label htmlFor="nme">
					<span>name</span>
				</label>

				<input
					type="numbers"
					name="steps"
					className="question"
					id="stps"
					required
					autoComplete="off"
					value={counter.steps}
					onChange={handleInfoChanged}
				/>
				<label htmlFor="stps">
					<span>Steps</span>
				</label>

				<input
					type="text"
					name="notes"
					className="question"
					id="nts"
					required
					autoComplete="off"
					value={counter.notes}
					onChange={handleInfoChanged}
				/>
				<label htmlFor="nts">
					<span>Note</span>
				</label>
			</div>

			<div className="controls">
				<div
					className="arrow-control control-up"
					onClick={() => addOne(counter.id)}
				>
					<i className="fas fa-sort-up" />
				</div>
				<div className="current-count">{counter.currentStep}</div>
				<div
					className="arrow-control control-down"
					onClick={() => subtractOne(counter.id)}
				>
					<i className="fas fa-sort-down" />
				</div>
			</div>
			<div className="removeBtn" onClick={() => remove(counter.id)}>
				X
			</div>
		</div>
	);
};

export default Counter;
