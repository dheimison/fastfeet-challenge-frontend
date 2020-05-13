import React from 'react';
import PropTypes from 'prop-types';

import { SubHeader } from './styles';

function DefaultSubHeader({ children }) {
  return <SubHeader>{children}</SubHeader>;
}

DefaultSubHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DefaultSubHeader;
