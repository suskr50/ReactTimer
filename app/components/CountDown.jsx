var React = require('react');
var Counter = require('Counter');
var CounterForm = require('CounterForm');
var CountButtons = require('CountButtons');

var CountDown = React.createClass({
	getInitialState: function() {
		return{
			count:0,
			countdownStatus: 'stopped'
		};
	},
     
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },

    startTimer: function(){
    	this.timer = setInterval(() => {
    		
    		var newCount = this.state.count - 1;
    		this.setState({
    			count: newCount >= 0 ? newCount: 0

    		});

    	},1000);
    },





	handleSetCountdown: function (seconds) {
		this.setState({
			count:seconds,
			countdownStatus: 'started'
		});
	},
	handleStatusChange: function(newStatus) {
		this.setState({countdownStatus:newStatus});
	},

	render: function () {
		var {count, countdownStatus} = this.state;	
		var renderControlArea =  () => {
			if (countdownStatus !== 'stopped') {
				return <CountButtons countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
			} else {
				return <CounterForm onSetCountdown={this.handleSetCountdown}/>;
			}
		};

	
		return(
			<div> 
				<h1 className="text-center page-title">CountDown </h1>
				<Counter totalSeconds={count}/>
				{renderControlArea()}
			</div>
			)
	}
});

module.exports = CountDown;
