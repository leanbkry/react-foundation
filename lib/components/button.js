'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enums = require('../enums');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Button property types.
 *
 * @type {Object}
 */
var ButtonPropTypes = _extends({}, _utils.GeneralPropTypes, {
  color: _react.PropTypes.oneOf((0, _utils.objectValues)(_enums.ButtonColors)),
  size: _react.PropTypes.oneOf((0, _utils.objectValues)(_enums.ButtonSizes)),
  isHollow: _react.PropTypes.bool,
  isExpanded: _react.PropTypes.bool,
  isDisabled: _react.PropTypes.bool,
  isDropdown: _react.PropTypes.bool,
  // optional element type, default is <a />, either string or React Component
  linkElement: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])

});

/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var Button = exports.Button = function Button(props) {
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Button.propTypes));

  return _react2.default.createElement('button', _extends({}, passProps, { className: createButtonClassName(props) }));
};

Button.propTypes = ButtonPropTypes;

/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */
var Link = exports.Link = function Link(props) {
  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Button.propTypes));

  var linkElement = props.linkElement;
  // JSX expects uppercase React Component variables

  var Elem = linkElement || 'a';

  return _react2.default.createElement(Elem, _extends({}, passProps, { className: createButtonClassName(props) }));
};

Link.propTypes = ButtonPropTypes;

/**
 * Creates button class name from the given properties.
 *
 * @param {Object} props
 * @returns {string}
 */
function createButtonClassName(props) {
  return (0, _utils.createClassName)(props.noDefaultClassName ? null : 'button', props.className, props.size, props.color, {
    'hollow': props.isHollow,
    'expanded': props.isExpanded,
    'disabled': props.isDisabled,
    'dropdown': props.isDropdown,
    'arrow-only': props.isArrowOnly
  }, (0, _utils.generalClassNames)(props));
}