import React from 'react';
import classes from './Wallet.css';
import { ArrowRight16 } from '@carbon/icons-react';

const Wallet = props => {
  return (
    <div className={classes.Border}>
      <div
        className={classes.Wallet}
      >
        <span className={classes.Name}>{props.name}</span>
        <div className={classes.Size}>
          {props.image}
        </div>
        <div  className={classes.Money}>{props.money}</div>
        <div className={classes.Link}>{props.LinkText} <ArrowRight16 style={{fill: '#8A3FFC', marginLeft: '5px'}}/></div>
      </div>
    </div>
  )
}

export default Wallet;