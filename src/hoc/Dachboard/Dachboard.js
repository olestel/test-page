import React, {Component} from 'react';
import classes from './Dachboard.css';
import DashboardNav from '../../components/Home/DashboardNav/DashboardNav'
import Revenues from '../../components/Home/Revenues/Revenues'

class Dachboard extends Component {
  render() {
    return (
      <main className={classes.Dachboard}>
        <div className={classes.DachboardContainer}>
          <span className={classes.UserCongratsText}>Good evening, Ali Darudar</span>
          <span className={classes.PageTitle}>Dashboard</span>
          <div className={classes.WeeklyInfo}>
            {/* <WeeklySnapshot /> */}
            {/* <WeeklySessions /> */}
          </div>
          
        </div>
        <DashboardNav />
        <Revenues />
      </main>
    )
  }
}

export default Dachboard;