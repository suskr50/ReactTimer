var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CounterForm = require('CounterForm');

describe('CounterForm',()=> {
	it('should exist', ()=> {
		expect(CounterForm).toExist();
	});

	it('should call onSetCountdown if valid seconds entered', ()=> {
		var spy = expect.createSpy();

		var countdownForm = TestUtils.renderIntoDocument(<CounterForm onSetCountdown = {spy}/>);

		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = '109';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(109);
	});
	it('should NOT call onSetCountdown if valid seconds entered', ()=> {
		var spy = expect.createSpy();

		var countdownForm = TestUtils.renderIntoDocument(<CounterForm onSetCountdown = {spy}/>);

		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = 'aabc';
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});


Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help