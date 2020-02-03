import React from 'react';
import classes from './CalendarAndChart.css';

const CalendarAndChart = props => {
  return (
    <div
      className={classes.CalendarAndChart}
    >
      {props.children}
    </div>
  )
}

export default CalendarAndChart;
