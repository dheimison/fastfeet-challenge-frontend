import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

function DefaultButton({ content, color, children, onClick }) {
  return (
    <Button color={color} onClick={onClick}>
      {children}
      {content}
    </Button>
  );
}

DefaultButton.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DefaultButton;
