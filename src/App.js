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
			//counters: localData || 
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
		// 	localStorage.counters = JSON.stringify(this.state.counters);
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
		const newList = [...this.state.counters];
		const index = newList.findIndex(c => c.id === id);
		if (newList[index].currentStep < newList[index].steps) {
			newList[index].currentStep += 1;
		};

		this.setState({
			counters: newList
		});
    }

	handleSubtractOne = id => {
		const newList = [...this.state.counters];
		const index = newList.findIndex(c => c.id === id);
		if (newList[index].currentStep > 0) {
			newList[index].currentStep -= 1;
		};

		this.setState({
			counters: newList
		});
	}
	
	handleInfoChange = (id, key, value) => {
		const newList = [...this.state.counters];
		const index = newList.findIndex(c => c.id === id);
		newList[index][key] = value;

		this.setState({
			counters: newList
		});
	}

	componentDidMount = () => {
		// localStorage.clear();
		// if (typeof(Storage) !== "undefined") {
		//     if(!localStorage.counters) {
		//         localStorage.counters = JSON.stringify(this.state.counters);
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
						<QuoteGenerator></QuoteGenerator>
					</section>
				</div>
			</div>
		);
	}
}

const QuoteGenerator = () => {
	let quoteList = [
		'“There is practically no activity that cannot be enhanced or replaced by knitting, if you really want to get obsessive about it." -Stephanie McPhee',
		'"There is no wrong way to knit. ... We should all agree to stop correcting each other and deal with the more important issue. How wrong crochet is." - Stephanie McPhee',
		'“I will always buy extra yarn. I will not try to tempt fate.” -Stephanie McPhee',
		'“it is pure potential. Every ball or skein of yarn holds something inside it, and the great mystery of what that might be can be almost spiritual” -Stephanie McPhee'
	];
	return (
		<div>{quoteList[Math.floor(Math.random() * Math.floor(quoteList.length-1))]}</div>
	);
}

export default App;
