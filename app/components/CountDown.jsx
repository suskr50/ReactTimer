var React = require('react');
var Counter = require('Counter');
var CounterInput = require('CounterInput');
var CounterForm = require('CounterForm');


var CountDown = React.createClass({
	getInitialState: function() {
		return{
			count:0,
			countdownStatus: 'stopped'
		};
	},
     
    componentDidUpdate: function (prevProps, prevState){
    	if (this.state.coundownStatus !== prevState.countdownStatus {
    		switch (this.state.coundownStatus) {
    			case 'started': 
    				this.startTimer();
    				break;
    		}
    	}

    }, 
    startTimer: function(){
    	this.timer = setInterval(() => {
    		var newCount = this.state.count - 1;
    		this.setState({
    			count: newCount >= 0 ? newcount: 0

    		});
    		
    	},1000);
    },
	handleSetCountdown: function (seconds) {
		debugger;
		this.setState({
			count:seconds,
			countdownStatus: 'started'
		});
	},

	render: function () {
		var {count} = this.state;	

		debugger;
		return(
			<div>
			<h1 className="text-center page-title">CountDown </h1>
			<Counter totalSeconds={count}/>
			<CounterForm onSetCountdown = {this.handleSetCountdown}/>
			<CounterInput />
			</div>
			)
	}
});

module.exports = CountDown;
