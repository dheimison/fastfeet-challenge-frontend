import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function DefaultContainer({ children }) {
  return <Container>{children}</Container>;
}

DefaultContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultContainer;
