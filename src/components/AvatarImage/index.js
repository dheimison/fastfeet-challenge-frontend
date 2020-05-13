import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function AvatarImage({ image }) {
  return <Container src={image} />;
}

AvatarImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default AvatarImage;
