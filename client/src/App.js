import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state = {
			someState: null,
		}
	}

	// componentDidMount(){
	// 	fetch('/somenonsense')
	// 	.then(res => {
	// 		return res.json();
	// 	})
	// 	.then(json => {
	// 		this.setState({
	// 			someState: json[0]
	// 		})
	// 	})
    // }

    // {JSON.stringify(this.state.someState)}

	render() {
		return (
			<div>
                <p>Hello There</p>
			</div>
		);
	}
}

export default App;
