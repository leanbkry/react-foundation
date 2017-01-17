import React, { PropTypes } from 'react';
import { ButtonSizes, ButtonColors } from '../enums';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Button property types.
 *
 * @type {Object}
 */
const ButtonPropTypes = {
  ...GeneralPropTypes,
  color: PropTypes.oneOf(objectValues(ButtonColors)),
  size: PropTypes.oneOf(objectValues(ButtonSizes)),
  isHollow: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool,
  // optional element type, default is <a />, either string or React Component
  linkElement: PropTypes.oneOfType([ PropTypes.element, PropTypes.string ])

};

/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Button = (props) => {
  const passProps = removeProps(props, objectKeys(Button.propTypes));

  return <button {...passProps} className={createButtonClassName(props)}/>;
};

Button.propTypes = ButtonPropTypes;

/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Link = (props) => {
  const passProps = removeProps(props, objectKeys(Button.propTypes));

  const { linkElement } = props;
  // JSX expects uppercase React Component variables
  const Elem = linkElement || 'a';

  return <Elem {...passProps} className={createButtonClassName(props)}/>;
};

Link.propTypes = ButtonPropTypes;

/**
 * Creates button class name from the given properties.
 *
 * @param {Object} props
 * @returns {string}
 */
function createButtonClassName(props) {
  return createClassName(
    props.noDefaultClassName ? null : 'button',
    props.className,
    props.size,
    props.color,
    {
      'hollow': props.isHollow,
      'expanded': props.isExpanded,
      'disabled': props.isDisabled,
      'dropdown': props.isDropdown,
      'arrow-only': props.isArrowOnly
    },
    generalClassNames(props)
  );
}
