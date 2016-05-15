var React = require('react');
var {Link} = require('react-router');
var {IndexLink} = require('react-router');



var Nav = React.createClass({
  
render: function () {
return(
<div className="top-bar">
  <div className="top-bar-left">
    <ul className="menu">
      <li className="menu-text">React Timer  App</li>
      <li><IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
      <li><Link to ="/about" activeClassName="active"   activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
    </ul>
  </div>
  <div className="top-bar-right">
    <p> Created by SKSwebdev </p>
  </div>
</div>

);
}
});

module.exports = Nav;


