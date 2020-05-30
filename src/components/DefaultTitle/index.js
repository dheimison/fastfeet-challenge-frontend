import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

function DefaultTitle({ children }) {
  return <Title>{children}</Title>;
}

DefaultTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DefaultTitle;
