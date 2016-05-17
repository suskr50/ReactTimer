var React = require('react');
var Counter = require('Counter');
var CounterInput = require('CounterInput');
var CounterForm = require('CounterForm');


var CountDown = React.createClass({
	getInitialState: function() {
		return{
			count:120
		};
	},
     
	handleSetCountdown: function (seconds) {
		debugger;
		this.setState({
			count:seconds
		});

	},

	render: function () {
		var {count} = this.state;	

		debugger;
		return(
			<div>
			<h1 className="text-center page-title">CountDown </h1>
			<Counter totalSeconds={count}/>
			debugger;
			<CounterForm onSetCountdown = {this.handleSetCountdown}/>
			<CounterInput />
			</div>
			)
	}
});

module.exports = CountDown;
