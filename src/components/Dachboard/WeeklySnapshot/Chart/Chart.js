import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Main', value: 75 },
  { name: 'B', value: 25 },
];

const COLORS = ['#6c6abb', '#E0E0E0'];

export default class Chart extends PureComponent {

  render() {
    return (
      <PieChart width={275} height={145} onMouseEnter={this.onPieEnter}>
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