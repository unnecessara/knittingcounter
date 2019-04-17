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

	handleAddOne = id => {
        const counter = this.state.counters.find(counter => counter.id === id);
		const newCounter = Object.assign({}, counter);
		if (newCounter.currentStep < newCounter.steps) {
			newCounter.currentStep += 1;
			const newList = this.state.counters.filter(counter => newCounter.id !== id);
			this.setState(state => {
				return { counters: [...newList, newCounter] };
			});
		};
    }

	handleSubtractOne = id => {
        const counter = this.state.counters.find(counter => counter.id === id);
		const newCounter = Object.assign({}, counter);
		if (newCounter.currentStep > 0) {
			newCounter.currentStep -= 1;
			const newList = this.state.counters.filter(counter => newCounter.id !== id);
			this.setState(state => {
				return { counters: [...newList, newCounter] };
			});
		}	
	}
	
	handleInfoChange = (id, key, value) => {
		const counter = this.state.counters.find(counter => counter.id === id);
		const newCounter = Object.assign({}, counter);
		newCounter[key] = value;
		const newList = this.state.counters.filter(counter => newCounter.id !== id);
		this.setState(state => {
			return { counters: [...newList, newCounter] };
		});
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
				<div className="main-content">
					<header className="App-header">
						<img
							src={logo}
							className="App-logo"
							alt="logo"
						/>
					</header>
					<section className="counters">
						<CounterList
							counters={this.state.counters}
							remove={this.removeCounter}
							addOne={this.handleAddOne}
							subtractOne={this.handleSubtractOne}
							infoChanged={this.handleInfoChange}
						/>
					</section>
					<section className="counter-forms">
						<div>
							<CounterForm addCounter={this.addCounter} />
						</div>
					</section>
					<section className="footer">
						<div>
							"There is no wrong way to knit. ... We
							should all agree to stop correcting each
							other and deal with the more important
							issue. How wrong crochet is." - Stephanie
							McPhee
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default App;
