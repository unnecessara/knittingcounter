import React, { Component } from 'react';

/// You are redoing this so that this is a controlled component and each one of the input fields should call a handler to update state?
// do more research


class CounterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			steps: 0,
			notes: '',
		};
	}
	
	handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	}

	handleCreate = (event) => {
		// Need validation 
		this.props.addCounter(this.state);
		this.setState({
			name: '',
			steps: 0,
			notes: ''
		});
	}

	render() {
		return (
			<div>
				<label>
					Name: 
					<input 
						type="text" 
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Total Steps:
					<input 
						type="number"
						name="steps"
						value={this.state.steps}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Notes:
					<input 
						type="text" 
						name="notes"
						value={this.state.notes}
						onChange={this.handleChange}
					/>
				</label>
				<button
					onClick={this.handleCreate}
				>
					Create
				</button>
			</div>
		);
	}
};


export default CounterForm;