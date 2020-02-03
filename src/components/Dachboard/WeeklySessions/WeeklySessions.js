import React, {Component} from 'react';
import classes from './WeeklySessions.css';
import Sessions from './Sessions/Sessions'
import { ArrowRight16, ChevronLeft16, ChevronRight16 } from '@carbon/icons-react';

class WeeklySessions extends Component {

  render() {
    return (
      <div className={classes.WeeklySessions}>
        <div className={classes.WeeklySessionsTitle}>
            <div>
                <span className={classes.Title}>
                    Upcoming sessions this week
                </span>
                <span className={classes.Link}>
                    View all sessions <ArrowRight16 style={{fill: '#8A3FFC', height: '12px'}}/>
                </span>
            </div>
            <div className={classes.NavArrow}>
                <ChevronLeft16 style={{fill: '#C6C6C6', cursor: 'pointer'}}/>
                <ChevronRight16 style={{cursor: 'pointer'}}/>
            </div>
        </div>
            
        <div className={classes.SessionsBlock}>
            <Sessions 
                name='Jemima Toya'
                joinTime={true}
                session='6:30 PM - 7:30 PM, 18 January 2020'
                firstLink='View sessions brief'
                secondLink='Send message'
                type='Active'
            />
            <Sessions 
                name='Nicholas Castillo'
                joinTime={false}
                session='3:30 PM - 4:45 PM, 20 January 2020'
                firstLink='Send message'
                secondLink='Reschedule'
            />
        </div>
      </div>
    )
  }
}

export default WeeklySessions;