import React from 'react';
import styles from './styles';

const StatisticCount = ({count, icon}) => {

  return <div style={styles.container}>
    {icon}
    <span style={styles.count}>{count}</span>
  </div>

}


export default StatisticCount