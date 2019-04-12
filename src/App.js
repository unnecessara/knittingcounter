import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterForm from './CounterForm.js';
import CounterList from './CounterList.js';

class App extends Component {
	constructor(props) {
		super(props);

		// const localData = localStorage.counters && JSON.parse(localStorage.counters);

		this.state = {
			//data: localData || {},
			counters: [
				{
					id: -1,
					name: 'Example Sleeve Counter',
					steps: 10,
                    notes: 'K14, SL2, P6',
                    currentStep: 0,
				}
			]
		};
	}

	updateLocalStorage = () => {
		// if (typeof Storage !== 'undefined')
		// 	localStorage.counters = JSON.stringify(this.state.data);
	}

	addCounter = fields => {
		let id;
		// Use local storage count or window's object id + 1
		// if (typeof Storage !== 'undefined') {
		// 	id = Number(localStorage.count);
		// 	localStorage.count = Number(localStorage.count) + 1;
		// } else {
		// 	id = window.id++;
		// }
		id = window.id++;

		const counter = {
			name: fields.name,
			steps: fields.steps,
			notes: fields.notes,
            id: id,
            currentStep: 0,
		};

		this.setState(state => {
			return { counters: this.state.counters.concat(counter) };
		});
	}

	removeCounter = id => {
		const newList = this.state.counters.filter(counter => counter.id !== id);

		this.setState(
			{
				counters: newList
			},
			() => {
				this.updateLocalStorage();
			}
		);
	}

	addOne = id => {
        const counter = this.state.counters.find(counter => counter.id === id);
		const newCounter = Object.assign({}, counter);
		if (counter.currentStep < counter.steps) {
			counter.currentStep += 1;
			this.setState({newCounter});
		}
    }

	subtractOne = id => {
        const counter = this.state.counters.find(counter => counter.id === id);
		const newCounter = Object.assign({}, counter);
		if (counter.currentStep > 0) {
			counter.currentStep -= 1;
			this.setState({ newCounter });
		}	
    }

	componentDidMount = () => {
		// localStorage.clear();
		// if (typeof(Storage) !== "undefined") {
		//     if(!localStorage.counters) {
		//         localStorage.counters = JSON.stringify(this.state.data);
		//     }
		//     if(!localStorage.count) {
		//         localStorage.count = 0;
		//     }
		// } else {
		//     console.log("Local storage not available, no counters will be remembered");
		window.id = 0;
		// }
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<section className="counters">
					<CounterList
						counters={this.state.counters}
						remove={this.removeCounter}
                        addOne={this.addOne}
                        subtractOne={this.subtractOne}
					/>
				</section>
				<section className="counter-forms">
					<div>
						<CounterForm addCounter={this.addCounter} />
					</div>
				</section>
			</div>
		);
	}
}

export default App;
