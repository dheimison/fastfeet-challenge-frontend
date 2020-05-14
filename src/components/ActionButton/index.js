import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ActionButton({ children, miniDropDownHeight }) {
  return <Container height={miniDropDownHeight}>{children}</Container>;
}

ActionButton.propTypes = {
  children: PropTypes.element.isRequired,
  miniDropDownHeight: PropTypes.number.isRequired,
};

export default ActionButton;
