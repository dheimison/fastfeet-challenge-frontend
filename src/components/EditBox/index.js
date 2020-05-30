import React from 'react';
import PropTypes from 'prop-types';

import { Box } from './styles';

function EditBox({ children }) {
  return <Box>{children}</Box>;
}

EditBox.propTypes = {
  children: PropTypes.element.isRequired,
};

export default EditBox;
