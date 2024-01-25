import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';
import Notification from './notification/Notification';
import StatisticsData from './statisticsData/StatisticsData';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <h2 className={styles['statistics-title']}>Statistics</h2>

        {total > 0 ? (
          <StatisticsData
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Statistics;
