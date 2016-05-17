var React = require('react');
var Counter = require('Counter');
var CounterForm = require('CounterForm');

 var Timer = React.createClass({
 	
	render: function() {
		return(
			<div>
				<h1 className="text-center page-title">Timer </h1>
				<Counter  totalSecondes={65}/>
				
			</div>
		)
	}
});

module.exports = Timer;
