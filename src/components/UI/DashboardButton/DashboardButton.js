import React from 'react';
import classes from './DashboardButton.css';

const DashboardButton = props => {
    const cls = [
        classes.DashboardButton,
        classes[props.type]
    ]

  return (
    <button
      className={cls.join(' ')}
    >
      {props.children}
    </button>
  )
}

export default DashboardButton;