var React = require('react');


var CounterForm = React.createClass({

	onSubmit: function (e){
		e.preventDefault();

		var strSeconds = this.refs.seconds.value;

		if (strSeconds.match(/^[0-9]*$/)) {
	      this.refs.seconds.value = '';
	      this.props.onSetCountdown(parseInt(strSeconds, 10));
	    }

	},


		render: function () {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" className="clock-form-input" placeholder="Enter time in seconds" ref="seconds"/>
					<button className="button expanded">Start</button>
				</form>
			</div>
		);
	}
});

module.exports = CounterForm;
