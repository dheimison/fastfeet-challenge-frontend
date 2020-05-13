import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ActionButton({ children }) {
  return <Container>{children}</Container>;
}

ActionButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ActionButton;
