var React = require('react');
var Counter = require('Counter');
var CounterInput = require('CounterInput');
var CounterForm = require('CounterForm');


var CountDown = React.createClass({
	render: function() {
		return(
			<div>
				<h1 className="text-center page-title">CountDown </h1>
				<Counter />
				<CounterForm />
				<CounterInput />
			</div>
		)
	}
});

module.exports = CountDown;
