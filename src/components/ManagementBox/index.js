import React from 'react';
import PropTypes from 'prop-types';

import { Box } from './styles';

function ManagementBox({ children }) {
  return <Box>{children}</Box>;
}

ManagementBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ManagementBox;
