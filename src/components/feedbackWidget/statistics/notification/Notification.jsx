import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return <p className={styles.notification}>{this.props.message}</p>;
  }
}

export default Notification;
