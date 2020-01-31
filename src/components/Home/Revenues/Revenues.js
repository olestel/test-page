import React, {Component} from 'react';
import classes from './Revenues.css';
import Wallet from './Wallet/Wallet';
import { UserAnalytics, ChartBar } from '@carbon/pictograms-react';

class Revenues extends Component {
  render() {
    return (
      <div className={classes.Revenues}>
        <Wallet
            name='Wallet'
            image={<UserAnalytics />}
            money='$4,864'
            LinkText='Send to bank'
        />
        <Wallet
            name='Sales this month'
            image={<ChartBar />}
            money='$1,642'
            LinkText='View payments history'
        />
      </div>
    )
  }
}

export default Revenues;

