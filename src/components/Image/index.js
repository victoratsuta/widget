import React from 'react';
import PropTypes from 'prop-types';

const Image = ({style, image}) => {

  return <img
    style={style}
    src={image.url}
    width={image.width}
    height={image.height}
  />

}

export default Image