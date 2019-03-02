import React from 'react';
import styles from './styles';
import Image from '../Image';
import PropTypes from 'prop-types';

const Rating = ({rating}) => {

  return <div style={styles.ratingContainer}>
    {rating && [...Array(rating)].map((e, i) => (
      <span style={styles.star} key={i}>	&#9733;</span>
      ))}
  </div>

}

export default Rating