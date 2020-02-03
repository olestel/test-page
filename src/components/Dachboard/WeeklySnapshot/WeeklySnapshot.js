import React, {Component} from 'react';
import classes from './WeeklySnapshot.css';
import { ArrowRight16, ArrowDownRight16 } from '@carbon/icons-react';
import Chart from './Chart/Chart';

class WeeklySnapshot extends Component {

  render() {
    return (
      <div className={classes.WeeklySnapshot}>
        <span className={classes.Title}>
            Weekly Snapshot
        </span>
        <div className={classes.ChartBlock}>
            <Chart />
            <span className={classes.Value}>4.84</span>
            <div className={classes.ButtonBlock}>
                <button className={classes.Healthy}>Healthy</button>
                <button className={classes.HealthyActivity}>0.08 <ArrowDownRight16 style={{fill: '#A2191F'}}/></button>
            </div>
            <span className={classes.Description}>
                Your current rating
            </span>
            <span>
                Average rating from 16 reviews
            </span>
            <div className={classes.Link}>See your reviews <ArrowRight16 style={{fill: '#8A3FFC', marginLeft: '5px'}}/></div>
        </div>
      </div>
    )
  }
}

export default WeeklySnapshot;