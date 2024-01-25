import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {Object.keys(options).map((item, index) => (
          <button
            key={index}
            type="button"
            className={styles['feedback-btn']}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
