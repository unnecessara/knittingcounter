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
        data: [],
    };
  }
  
  updateLocalStorage = () => {
    // if (typeof Storage !== 'undefined')
	// 	localStorage.counters = JSON.stringify(this.state.data);
  }

  addCounter = (fields) => {
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
		id: id
	};

    this.setState(state => {
        return {data: this.state.data.concat(counter)}
    });
  }

  removeCounter = (id) => {
    const newList = this.state.data.filter(counter => counter.id !== id);

    this.setState({
        data: newList
    }, () => {
        this.updateLocalStorage();
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
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="main-content">
				<CounterList
					counters={this.state.data}
					remove={this.removeCounter}
				/>
				<div className="counter-form">
					<CounterForm addCounter={this.addCounter} />
				</div>
			</section>
		</div>
	);
  }
}

export default App;
