
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Counter = require('Counter');

describe('Counter', () => {
  it('should exist', () => {
    expect(Counter).toExist();
  });

 
  describe('render', () => {
    it('should render clock to output', () => {
      var counter = TestUtils.renderIntoDocument(<Counter totalSeconds= {62}/>);
      var $el = $(ReactDOM.findDOMNode(counter));
      var actualText = $el.find('.counter-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var counter = TestUtils.renderIntoDocument(<Counter/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = counter.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      var counter = TestUtils.renderIntoDocument(<Counter/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = counter.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});