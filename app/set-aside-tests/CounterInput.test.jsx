var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('CounterInput');

describe('Controls',() => {
	it('should exist',() => {

		expect('Controls').toExist()
	});

	describe('render',() => {

		it('should render pause when started',() => {
			var controls = TestUtils.renderIntoDocument(<CounterInput/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pausedButton = $el.find('button:contains(Pause)';

			expect($pauseButton.length).toBe(1);

		});		

	});
});