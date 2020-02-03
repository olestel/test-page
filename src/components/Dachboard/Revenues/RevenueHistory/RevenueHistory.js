import React, { PureComponent } from 'react';
import classes from './RevenueHistory.css';
import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

const data = [
  {
    name: 'Aug', money: 2200,
  },
  {
    name: 'Sep', money: 2810,
  },
  {
    name: 'Oct', money: 1500,
  },
  {
    name: 'Nov', money: 1250,
  },
  {
    name: 'Dec', money: 900,
  },
  {
    name: 'Jan', money: 1700,
  }
];

export default class RevenueHistory extends PureComponent {
  render() {
    return (
      <div className={classes.RevenueHistory}>
        <span>Revenue history</span>
        <BarChart
          width={430}
          height={235}
          data={data}
          margin={{top: 20, right: 10, left: -20, bottom: 0}}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="money" fill="#0F62FE" barSize={12} />
        </BarChart>
      </div>
    );
  }
}