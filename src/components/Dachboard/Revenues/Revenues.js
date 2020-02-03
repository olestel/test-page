import React, {Component} from 'react';
import classes from './Revenues.css';
import Wallet from './Wallet/Wallet';
import CalendarAndChart from './CalendarAndChart/CalendarAndChart';
import RevenueHistory from './RevenueHistory/RevenueHistory';
import { CustomerService, ChartBar } from '@carbon/pictograms-react';
import { Calendar16, ChartPie16 } from '@carbon/icons-react';

class Revenues extends Component {
  render() {
    return (
      <div className={classes.Revenues}>
        <div className={classes.RevenuesBlock}>
          <Wallet
              name='Wallet'
              image={<CustomerService style={{width: '100%', height: '100%'}}/>}
              money='$4,864'
              LinkText='Send to bank'
          />
          <Wallet
              name='Sales this month'
              image={<ChartBar style={{width: '100%', height: '100%'}}/>}
              money='$1,642'
              LinkText='View payments history'
          />
          <RevenueHistory />
        </div>
        <div>
          <CalendarAndChart> <Calendar16 style={{fill: '#fff', margin: 'auto'}} /> </CalendarAndChart>
          <CalendarAndChart> <ChartPie16 style={{fill: '#fff', margin: 'auto'}} /> </CalendarAndChart>
        </div>
      </div>
      
    )
  }
}

export default Revenues;