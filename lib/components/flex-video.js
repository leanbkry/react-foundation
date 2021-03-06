'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexVideo = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {Object}
 */
var FlexVideo = exports.FlexVideo = function FlexVideo(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'flex-video', props.className, {
    widescreen: props.isWidescreen,
    vimeo: props.isVimeo
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(FlexVideo.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

FlexVideo.propTypes = _extends({}, _utils.GeneralPropTypes, {
  isWidescreen: _react.PropTypes.bool,
  isVimeo: _react.PropTypes.bool
});