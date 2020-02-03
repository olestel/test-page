import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Main', value: 75 },
  { name: 'B', value: 25 },
];

const COLORS = ["url(#bones-gradient)", '#E0E0E0'];

export default class Chart extends PureComponent {

  render() {
    return (
      <PieChart width={275} height={145}>
        <defs>
          <linearGradient id="bones-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#bbafe1" />
          <stop offset="100%" stopColor="#0F62FE" />
          </linearGradient>
        </defs>
        <Pie
          data={data}
          cx={130}
          cy={130}
          startAngle={180}
          endAngle={0}
          innerRadius={125}
          outerRadius={135}
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}