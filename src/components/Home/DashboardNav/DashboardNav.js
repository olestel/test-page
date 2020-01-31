import React, {Component} from 'react';
import classes from './DashboardNav.css';
import DashboardButton from '../../UI/DashboardButton/DashboardButton';

class DashboardNav extends Component {
  render() {
    return (
        <nav className={classes.DashboardNav}>
          <DashboardButton type="active">Revenues</DashboardButton>
          <DashboardButton type="">Customers</DashboardButton>
        </nav>
    )
  }
}

export default DashboardNav;