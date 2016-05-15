var React = require('react');
var Nav = require('./NAV');

var Main = (props) => {
	return(
		<div>
			<Nav />
			<div className="row">
			<div className="medium-6 large-4 small-centered">
			<p> Here is some text to the new main</p>
			{props.children}
			</div>
			</div>
			</div>
		);
}



module.exports = Main;