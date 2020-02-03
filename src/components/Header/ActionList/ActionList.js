import React, {Component} from 'react';
import classes from './ActionList.css';
import HeaderButton from '../../UI/HeaderButton/HeaderButton';
import { Help16, NotificationNew16 } from '@carbon/icons-react';

class ActionList extends Component {
  render() {
    return (
      <div className={classes.ActionList}>
        <HeaderButton type="active">Advise</HeaderButton>
        <HeaderButton type="">Seek</HeaderButton>
        <NotificationNew16 className={classes.iconColor} />
        <Help16 className={classes.iconColor} />
      </div>
    )
  }
}
  
export default ActionList;