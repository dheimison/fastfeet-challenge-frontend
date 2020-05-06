import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Avatar({ name, colors, size, fontSize }) {
  const firstName = name.split(' ')[0].slice(0, 1);

  const lastName = name.split(' ')[1] ? name.split(' ')[1].slice(0, 1) : '';

  return (
    <Container colors={colors} size={size} font={fontSize}>
      <span>{firstName + lastName}</span>
    </Container>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,

  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired,

    secondary: PropTypes.string.isRequired,
  }).isRequired,

  size: PropTypes.number.isRequired,
};
