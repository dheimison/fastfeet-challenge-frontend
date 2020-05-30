import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function SearchInput({ htmlFor, children }) {
  return <Container htmlFor={htmlFor}>{children}</Container>;
}

SearchInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default SearchInput;
